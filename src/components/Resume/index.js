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
            <div className="resume-body">
                <div className="main-body">
                    <div className="experience">
                        <h3 className="experience-header">Experience</h3>
                        <div className="employer-card">
                            <h4>Frito-Lay, West Valley City, UT - Customer Service Specialist, CSS</h4>
                            <p><i>July 2018 - Present</i></p>
                            <ul>
                                <li>Maintain the store’s aisle and Frito-Lay displays.</li>
                                <li>Build displays including cardboard used for display purposes.</li>
                                <li>Numerous accolades from management for punctuality and maintaining a clean and organized store.</li>
                            </ul>
                        </div>
                        <div className="employer-card">
                            <h4>Wal-Mart Stores, Inc., West Jordan, UT— CAP Team 1 Associate</h4>
                            <p><i>July 2007 - July 2018</i></p>
                            <ul>
                                <li>Stocking shelves, helping customers, organizing backroom.</li>
                                <li>Often looked to as a leader in the absence of management.</li>
                                <li>Asked on multiple occasions to promote to management.</li>
                                <li>I work hard to make sure management sees me as an asset rather than a liability.</li>
                            </ul>
                        </div>
                        <div className="employer-card">
                            <h4>Kellogg, Co., Salt Lake City, UT— Merchandiser</h4>
                            <p><i>November 2013 - December 2014</i></p>
                            <ul>
                                <li>Tasked with traveling to different stores and replenishing freight.</li>
                                <li>Trusted to build product features on the sales floor.</li>
                                <li>Handled and organized freight in within the overstock bins.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="education">
                        <div>
                            <h3 className="education-header">Education</h3>
                        </div>
                        <div className="education-card">
                            <h4>University of Utah Coding Bootcamp, Salt Lake City, UT</h4>
                            <h5>Certificate</h5>
                            <p><i>July 2021 - January 2022</i></p>
                            <p className="education-info">I've spent six months learning all I can about coding from the basics of HTML to cutting edge and widely used technology like React. I was taught numerous coding languages and how to pick up on new ones quickly.</p>
                        </div>
                        <div className="education-card">
                            <h4>Broadview Entertainment Arts University, Salt Lake City, UT</h4>
                            <h5>Bachelor's of Fine Arts, Visual Design</h5>
                            <p><i>October 2016 - March 2018</i></p>
                            <p className="education-info">Since 2016 I have pursued my degree in animation and modeling at BEAU. I have taken a number of Professional Communication courses as well as Small Business Management and entrepreneurship classes. Therefore I have some knowledge of how to conduct myself and communicate effectively in the workplace.</p>
                        </div>
                        <div className="education-card">
                            <h4>The Art Institute of Salt Lake City, Draper, UT</h4>
                            <h5>Media Arts and Animation Coursework</h5>
                            <p><i>January 2015 - March 2016</i></p>
                            <p className="education-info">The Art Institute is where I initially began my studies for 3D Animation and modeling.</p>
                        </div>
                    </div>
                </div>
                <div className="qualifications">
                    <div className="skills">
                        <h3 className="skills-header">Skills</h3>
                        <div className="skills-info">
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
                    <div className="languages">
                        <h3 className="languages-header">Languages/Tools</h3>
                        <div className="languages-info">
                            <p><b>Languages</b></p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>MySQL</li>
                                <li>RegEx</li>
                            </ul>
                            <p><b>Tools</b></p>
                            <ul>
                                <li>Third-Party APIs</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>MongoDB</li>
                                <li>Mongoose</li>
                                <li>React</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;