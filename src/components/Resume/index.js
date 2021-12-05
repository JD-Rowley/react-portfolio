import React from 'react';
import './index.css';

function Resume() {
    return(
        <section>
            <div className="resume-header">
                <div>
                    <h1>Jesse Rowley</h1>
                </div>
                <div>
                    <p>5772 W Loch Raven Ct.</p>
                    <p>West Valley City, UT 84128</p>
                    <p><b>(435)209-0084</b></p>
                    <a href="mailto: jdrowley1989@gmail.com"><b>jdrowley1989@gmail.com</b></a>
                </div>
            </div>
            <div className="main-body">
                <div className="experience">
                    <div>
                        <h3>Experience</h3>
                    </div>
                    <div className="employer-card">
                        <h4>Frito-Lay, West Valley City, UT - Customer Service Specialist, CSS</h4>
                        <p>July 2018 - Present</p>
                        <ul>
                            <li>Maintain the store’s aisle and Frito-Lay displays.</li>
                            <li>Build displays including cardboard used for display purposes.</li>
                            <li>Numerous accolades from management for punctuality and maintaining a clean and organized store.</li>
                        </ul>
                    </div>
                </div>
                <div className="qualifications">
                    <div className="skills">
                        <h3>Skills</h3>
                        <p>Computer Software</p>
                        <ul>
                            <li>Full-Stack Web Development</li>
                            <li>Handheld Computers</li>
                            <li>Apps</li>
                        </ul>
                        <p>Graphic Design</p>
                        <p>Image Editing</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;