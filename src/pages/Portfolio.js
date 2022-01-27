import React from 'react';
import Carousel from '../components/Carousel';
import ProjectCard from '../components/ProjectCard';
import projects from '../components/projects.js';

function Project() {
    return(
        <section className="container">
            <Carousel />
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