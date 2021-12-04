import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard(props) {
    return(
        <div className="project-card">
            <div className="card-header">
                <a href={props.deploy}><h3>{props.title} {props.deploy !== null && <FaExternalLinkAlt />}</h3></a>
                <img src={props.image} maxHeight="150px" width="100%" alt={props.title} key={props.title} />
            </div>
            <ul>
                <li><b>GitHub:</b> <a href={props.github_url}>{props.github}</a></li>
                <li><b>Description: </b>{props.description}</li>
                <li><b>Languages/Tools: </b>{props.languages}</li>
            </ul>
        </div>
    );
}

export default ProjectCard;