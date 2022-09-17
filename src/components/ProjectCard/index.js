import React from 'react';
import './index.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard(props) {
    return(
        <div className='project-card'>
            <div className='card-header'>
                <a href={props.deploy} target='_blank' rel='noreferrer'><h3 className='card-header-btn card-btn'>
                    {props.title} {props.deploy !== null && <FaExternalLinkAlt />}
                </h3></a>
            </div>
            <ul>
                <li><b>GitHub:</b> <a href={props.github} className='github-link'>{props.title}</a></li>
                <li><b>Description: </b>{props.description}</li>
                <li><b>Language: </b>{props.language}</li>
                <li><b>Tools: </b>{props.tools}</li>
            </ul>
        </div>
    );
}

export default ProjectCard;