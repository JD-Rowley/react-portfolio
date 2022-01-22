import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './index.css';

function CarouselItem(props) {
    return (
        <div className='carousel-container'>
            <div className='slides'>
                <div id='feature-el' className='slide fade'>
                    <img src={props.image} className='slide-img' alt={props.title} key={props.title} />
                    <a href={props.deploy} target='_blank' rel='noreferrer' className='title project'><h3>{props.title} {props.deploy !== null && <FaExternalLinkAlt />}</h3></a>
                    <ul>
                        <li><b>GitHub:</b> <a href={props.github_url}>{props.github}</a></li>
                        <li><b>Description: </b>{props.description}</li>
                        <li><b>Languages/Tools: </b>{props.languages}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CarouselItem;