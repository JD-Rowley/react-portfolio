import React from 'react';
import resume from '../../assets/resume/Jesse-Rowley-Resume.pdf'
import './index.css';

function Resume() {
    return(
        <section className='resume-container'>
        <a href={resume} download='Jesse_Rowley_Resume.pdf' className='btn submit-btn'>Download Resume as PDF</a>
            <div className='resume-header'>
                <h1>Jesse Rowley</h1>
            </div>
            <div className='resume-contact'>
                <div className='contact-info'>
                    <p>5772 W Loch Raven Ct. West Valley City, UT 84128</p>
                    <p><b>Phone:</b> (435)209-0084 || <b>Email:</b> <a href='mailto: jdrowley1989@gmail.com'>jdrowley1989@gmail.com</a></p>
                    <p><b>LinkedIn:</b> <a href='https://www.linkedin.com/in/jd-rowley/'>/jd-rowley</a> || <b>Portfolio:</b> <a href='https://jd-rowley.github.io/react-portfolio/'>/react-portfolio</a> || <b>GitHub:</b> <a href='https://github.com/JD-Rowley'>/JD-Rowley</a></p>
                </div>
            </div>
            <div className='resume-body'>
                <div className='main-body'>
                    <div className='technical-skills'>
                        <h3 className='skills-header'>Technical Skills</h3>
                    </div>
                    <div className='skills'>
                        <p><b>Languages:</b> JavaScript, ES6, CSS3, HTML5, SQL, NoSQL</p>
                        <p><b>Applications:</b> GitHub, MongoDB, MySQL, AWS, Heroku</p>
                        <p><b>Tools:</b> Express, React, Node, Handlebars, Bootstrap</p>
                    </div>
                    <div className='projects'>
                        <h3 className='projects-header'>Projects</h3>
                        <div className='projects-card'>
                            <p><b>Tech Blog</b> || <a href='https://github.com/JD-Rowley/mvc-tech-blog'>/mvc-tech-blog</a> || <a href='https://cryptic-bastion-77900.herokuapp.com/'>cryptic-bastion-77900.herokuapp.com</a></p>
                            <ul className='projects-list'>
                                <li><b>Description:</b> Website for users to share ideas with each other.</li>
                                <li><b>Role:</b> Sole author</li>
                                <li><b>Tools:</b> HTML, CSS, JavaScript, Bootstrap, Express, Handlebars, MySQL</li>
                            </ul>
                        </div>
                        <div className='projects-card'>
                            <p><b>Permaculture Exchange</b> || <a href='https://github.com/JD-Rowley/permaculture-exchange'>/permaculture-exchange</a> || <a href='https://permaculture-exchange.herokuapp.com/'>permaculture-exchange.herokuapp.com</a></p>
                            <ul className='projects-list'>
                                <li><b>Description:</b> Website for users to share ideas with each other.</li>
                                <li><b>Role:</b> Sole author</li>
                                <li><b>Tools:</b> HTML, CSS, JavaScript, Bootstrap, Express, Handlebars, MySQL</li>
                            </ul>
                        </div>
                    </div>
                    <div className='experience'>
                        <h3 className='experience-header'>Experience</h3>
                        <div className='employer-card'>
                            <h4>Frito-Lay, West Valley City, UT - Customer Service Specialist, CSS</h4>
                            <p><i>July 2018 - Present</i></p>
                            <ul>
                                <li>Maintain the store’s aisle and Frito-Lay displays.</li>
                                <li>Build displays including cardboard used for display purposes.</li>
                                <li>Numerous accolades from management for punctuality and maintaining a clean and organized store.</li>
                            </ul>
                        </div>
                        <div className='employer-card'>
                            <h4>Wal-Mart Stores, Inc., West Jordan, UT— CAP Team 1 Associate</h4>
                            <p><i>July 2007 - July 2018</i></p>
                            <ul>
                                <li>Stocking shelves, helping customers, organizing backroom.</li>
                                <li>Often looked to as a leader in the absence of management.</li>
                                <li>Asked on multiple occasions to promote to management.</li>
                                <li>I work hard to make sure management sees me as an asset rather than a liability.</li>
                            </ul>
                        </div>
                        <div className='employer-card'>
                            <h4>Kellogg, Co., Salt Lake City, UT— Merchandiser</h4>
                            <p><i>November 2013 - December 2014</i></p>
                            <ul>
                                <li>Tasked with traveling to different stores and replenishing freight.</li>
                                <li>Trusted to build product features on the sales floor.</li>
                                <li>Handled and organized freight in within the overstock bins.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='education'>
                        <div>
                            <h3 className='education-header'>Education</h3>
                        </div>
                        <div className='education-card'>
                            <h4>University of Utah Coding Bootcamp, Salt Lake City, UT</h4>
                            <h5>Certificate</h5>
                            <p><i>July 2021 - January 2022</i></p>
                            <p className='education-info'>I've spent six months learning all I can about coding from the basics of HTML to cutting edge and widely used technology like React. I was taught numerous coding languages and how to pick up on new ones quickly.</p>
                        </div>
                        <div className='education-card'>
                            <h4>Broadview Entertainment Arts University, Salt Lake City, UT</h4>
                            <h5>Bachelor's of Fine Arts, Visual Design</h5>
                            <p><i>October 2016 - March 2018</i></p>
                            <p className='education-info'>Since 2016 I have pursued my degree in animation and modeling at BEAU. I have taken a number of Professional Communication courses as well as Small Business Management and entrepreneurship classes. Therefore I have some knowledge of how to conduct myself and communicate effectively in the workplace.</p>
                        </div>
                        <div className='education-card'>
                            <h4>The Art Institute of Salt Lake City, Draper, UT</h4>
                            <h5>Media Arts and Animation Coursework</h5>
                            <p><i>January 2015 - March 2016</i></p>
                            <p className='education-info'>The Art Institute is where I initially began my studies for 3D Animation and modeling.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;