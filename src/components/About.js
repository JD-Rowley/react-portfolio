import React from 'react';

function About() {
    return (
        <section>
            <div class="container">
                <div class="flex-container">
                    <div class="name-container">
                        <h1 class="name">JD Rowley</h1>
                        <h2 class="profession">Full-Stack Web Developer</h2>
                    </div>
                    <div class="about-container">
                        <div class="about-section">
                            <h3>About Me:</h3>
                            <p>My name is Jesse Rowley and I am a Full-Stack Web Developer. I prefer to go by the name JD. With a degree in Fine Art, I am especially skilled in web design. As such, I tend to gravitate toward front-end development, although, I do have a particularly soft spot for database creation.</p>
                        </div>
                        <div class="portfolio-btn-container">
                            <button class="btn portfolio-btn">View Portfolio</button>
                        </div>  
                    </div>  
                </div>
            </div>
        </section>
    );
}

export default About;