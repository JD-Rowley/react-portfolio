import React from 'react';
import './index.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard(props) {
    return(
        <div className='project-card'>
            <div className='card-header'>
                <a href={props.deploy} target='_blank' rel='noreferrer'><h3>{props.title} {props.deploy !== null && <FaExternalLinkAlt />}</h3></a>
                <div className='image-container'>
                    <img src={props.image} width='100%' alt={props.title} key={props.title} />
                </div>
            </div>
            <ul>
                <li><b>GitHub:</b> <a href={props.github_url} className='github-link'>{props.github}</a></li>
                <li><b>Description: </b>{props.description}</li>
                <li><b>Languages/Tools: </b>{props.languages}</li>
            </ul>
        </div>
    );
}

export default ProjectCard;