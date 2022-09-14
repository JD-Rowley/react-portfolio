import React, { useState } from 'react';
import Carousel from '../components/Carousel';
import ProjectCard from '../components/ProjectCard';
// import projects from '../components/projects.js';

const API_URL = "https://api.github.com/users/jd-rowley/repos?per_page=100";

function Project() {
    const [ projects ] = useState([]);

    function fetchApi() {
        fetch(API_URL)
            .then((response) => {
                if(response.ok) {
                    response.json().then(function(data) {
                        if(data) {
                            for(let i = 0; i < data.length; i ++) {
                                if(data[i].description) {
                                    projects.push(data[i]);
                                }
                            }
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
    } 

    fetchApi();

    return(
        <section className="container">
            <Carousel />
            <div className="other-projects">
            <h2>Projects:</h2>
            </div>
            <div className="projects-container">
                {console.log(projects)}
                {[...projects].map(({ id, homepage, name, html_url, description, language, topics }) => (
                    <ProjectCard 
                        key = {id}
                        deploy = {homepage}
                        title = {name}
                        github = {html_url}
                        description = {description}
                        language = {language}
                        tools = {topics.toString().split(',').join(', ')}
                    />
                ))}
            </div>
        </section>
    );
}

export default Project;