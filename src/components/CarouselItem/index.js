import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

function CarouselItem(props) {
    return (
        <div id='feature-el' className='feature-el'>
            <a href={props.deploy} target='_blank' rel='noreferrer' className='title-link'>
                <h3 className='project-title'>{props.title} {props.deploy !== null && <FaExternalLinkAlt />}</h3>
                <img src={props.image} className='slide-img' alt={props.title} key={props.title} />
            </a>
            <ul>
                <li><b>GitHub:</b> <a href={props.github_url} className='github-link'>{props.github}</a></li>
                <li><b>Description: </b>{props.description}</li>
                <li><b>Languages/Tools: </b>{props.languages}</li>
            </ul>
        </div>
    );
}

export default CarouselItem;