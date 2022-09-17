import React, { useState } from 'react';
import Carousel from '../components/Carousel';
import ProjectCard from '../components/ProjectCard';

function Project() {
    const API_URL = "https://api.github.com/users/jd-rowley/repos?per_page=100";
    const [ repoData, setRepoData ] = useState(() => {
        fetch(API_URL)
        .then((res) => {
            if(res.ok) {
                res.json().then((data) => {
                    if(data) {
                        const projects = data.filter(project => project.description !== null)
                        const filteredProjects = projects.map(project => {
                            return <ProjectCard 
                                key = {project.id}
                                deploy = {project.homepage}
                                title = {project.name}
                                github = {project.html_url}
                                description = {project.description}
                                language = {project.language}
                                tools = {project.topics.toString().split(',').join(', ')}             
                            />
                    });
                        setRepoData(filteredProjects); 
                    } else {
                        return "No repos found..."
                    }
                });
            } else {
                return "Something went wrong...";
            }
        })
        .catch(err => {
            alert("Unable to connect to GitHub...");
        })

    });

    return(
        <section className="container">
            <Carousel />
            <div className="other-projects">
            <h2>Projects:</h2>
            </div>
            <div className="projects-container">
                {repoData}
            </div>
        </section>
    );
}

export default Project;