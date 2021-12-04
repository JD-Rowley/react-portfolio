import React from 'react';
import ProjectCard from './ProjectCard';
import projects from './projects.js'

function Project() {
    return(
        <section className="container">
            <div className="other-projects">
            <h2>Projects:</h2>
                <div className="search">
                    <h3>Search by language/tool:</h3>
                    <select name="languages" id="">
                        <option value="">HTML</option>
                        <option value="">CSS</option>
                        <option value="">Javascript</option>
                        <option value="">React</option>
                        <option value="">Node</option>
                        <option value="">APIs</option>
                        <option value="">Express</option>
                        <option value="">SQL</option>
                        <option value="">NoSQL</option>
                    </select>
                </div>
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