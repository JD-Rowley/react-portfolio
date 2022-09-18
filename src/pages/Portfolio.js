import React, { useEffect, useRef, useState } from 'react';
import Carousel from '../components/Carousel';
import ProjectCard from '../components/ProjectCard';
import SearchBar from '../components/SearchBar';

import autoAnimate from '@formkit/auto-animate';

function Project() {
    const API_URL = "https://api.github.com/users/jd-rowley/repos?per_page=100&sort=created_at";
    const parentRef = useRef(null);

    useEffect(() => {
        if(parentRef.current) {
            autoAnimate(parentRef.current);
        }
    }, [parentRef])

    const [ repoData, setRepoData ] = useState(() => {
        fetch(API_URL)
        .then((res) => {
            if(res.ok) {
                res.json().then((data) => {
                    if(data) {
                        const filterProjects = data.filter(project => project.description !== null)
                        const projects = filterProjects.map(project => {
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
                        setRepoData(projects); 
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
                <SearchBar />
            </div>
            <div className="projects-container" ref={parentRef}>
                {repoData}
            </div>
        </section>
    );
}

export default Project;