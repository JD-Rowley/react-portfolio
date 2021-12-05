import React from 'react';
import './index.css';
import ProjectCard from '../ProjectCard';
import projects from '../projects.js'

function Project() {
    return(
        <section className="container">
            <div className="other-projects">
            <h2>Projects:</h2>
            </div>
            <div className="projects-container">
                {projects.map(project => (
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