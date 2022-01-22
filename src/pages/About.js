import React from 'react';

function About() {
    return (
        <section>
            <div className="container">
                <div className="flex-container">
                    <div className="name-container">
                        <h1 className="name">JD Rowley</h1>
                        <h2 className="profession">Full-Stack{<br/>} Web Developer</h2>
                    </div>
                    <div className="about-container">
                        <div className="about-section">
                            <h3>About Me:</h3>
                            <p>Full stack web developer with graphic design experience educated at Southern Utah University and University of Utah. 
                                Recently earned a certificate in full stack web development from University of Utah with newly developed skills in JavaScript, CSS, React.js and more.</p>
                        </div>
                    </div>  
                </div>
            </div>
        </section>
    );
}

export default About;