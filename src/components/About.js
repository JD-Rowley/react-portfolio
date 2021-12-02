import React from 'react';

function About() {
    return (
        <section>
            <div className="container">
                <div className="flex-container">
                    <div className="name-container">
                        <h1 className="name">JD Rowley</h1>
                        <h2 className="profession">Full-Stack Web Developer</h2>
                    </div>
                    <div className="about-container">
                        <div className="about-section">
                            <h3>About Me:</h3>
                            <p>My name is Jesse Rowley and I am a Full-Stack Web Developer. I prefer to go by the name JD. With a degree in Fine Art, I am especially skilled in web design. As such, I tend to gravitate toward front-end development, although, I do have a particularly soft spot for database creation.</p>
                        </div>
                        <div className="portfolio-btn-container">
                            <button className="btn portfolio-btn">View Portfolio</button>
                        </div>  
                    </div>  
                </div>
            </div>
        </section>
    );
}

export default About;