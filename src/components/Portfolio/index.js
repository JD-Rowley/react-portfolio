import React from 'react';
import Carousel from '../Carousel';
import ProjectCard from '../ProjectCard';
import projects from '../projects.js';
import './index.css';

function Project() {
    return(
        <section className="container">
            {projects.slice(0, 3).map(project => (
                <Carousel 
                    key={project.title}
                    title={project.title}
                    deploy={project.deploy}
                    github_url={project.github_url}
                    github={project.github}
                    description={project.description}
                    languages={project.languages}
                    image={project.image}
                />            
            ))}
            <div className="other-projects">
            <h2>Projects:</h2>
            </div>
            <div className="projects-container">
                {projects.slice(3, projects.length).map(project => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        deploy={project.deploy}
                        github_url={project.github_url}
                        github={project.github}
                        description={project.description}
                        languages={project.languages}
                        image={project.image}
                    />
                ))}
            </div>
        </section>
    );
}

export default Project;