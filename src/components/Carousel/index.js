import React, { useState } from 'react'
import CarouselItem from '../CarouselItem';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import projects from '../projects';
import './index.css';

function Carousel() {
    const [current, setCurrent] = useState(0);
    const length = projects.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current -1);
    };

    if (projects.length <= 0) {
        return null;
    };

    return (
        <section className='carousel'>
            <FaChevronLeft className='slide-btn prev' onClick={prevSlide} />
            {projects.map((project, index) => {
                return (
                    <div className={index === current ? 'slide-active slide' : 'slide-inactive slide'} key={index}>
                        {index === current && (
                            <CarouselItem 
                                key={project.title}
                                title={project.title}
                                deploy={project.deploy}
                                github_url={project.github_url}
                                github={project.github}
                                description={project.description}
                                language={project.language}
                                tools={project.tools}
                                image={project.image}
                            /> 
                        )}
                    </div>
                )
            })}
            <FaChevronRight className='slide-btn next' onClick={nextSlide} />
        </section>
    )
}

export default Carousel;
