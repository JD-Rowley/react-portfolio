import React from 'react';
import ResponsiveCarousel from 'react-responsive-carousel';
import CarouselItem from '../CarouselItem';
import projects from '../../components/projects.js';
import './index.css';

function Carousel() {
    return (
        <ResponsiveCarousel showArrows={true}
            {...projects.slice(0, 3).map(project => (
                <CarouselItem 
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
        />
    );
}

export default Carousel;