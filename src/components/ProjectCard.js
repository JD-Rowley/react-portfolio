import React from 'react';

function ProjectCard(props) {
    return(
        <div className="project-card">
            <div className="card-header">
                <a href={props.deploy}><h3>{props.title}</h3></a>
            </div>
            <ul>
                <div>
                    <img src={props.image} height="150px" alt={props.title} />
                </div>
                <li><b>GitHub:</b> <a href={props.github_url}>{props.github}</a></li>
                <li><b>Description: </b>{props.description}</li>
                <li><b>Languages: </b>{props.languages}</li>
            </ul>
        </div>
    );
}

export default ProjectCard;