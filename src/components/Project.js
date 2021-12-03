import React from 'react';

function Project(props) {
    return(
        <section className="container">
            <div className="other-projects">
            <h2>Other projects:</h2>
                <div className="search">
                    <h3>Search by language:</h3>
                    <select name="languages" id="">
                        <option value="">HTML</option>
                        <option value="">CSS</option>
                        <option value="">Javascript</option>
                        <option value="">React</option>
                        <option value="">Node</option>
                        <option value="">APIs</option>
                        <option value="">Express</option>
                        <option value="">SQL</option>
                        <option value="">NoSQL</option>
                    </select>
                </div>
            </div>
            <div className="projects-container">
                {props.children}
                {/* <div className="project-card">
                    <div className="card-header">
                        <a href=""><h3>Tech Blog</h3></a>
                    </div>
                    <ul>
                        <li><b>GitHub:</b> <a href="">The Dog Dossier</a></li>
                        <li><b>Description:</b> A database containing information for dog owners and aspiring dog owners alike.</li>
                        <li><b>Languages:</b> HTML, CSS, Javascript, Sequelize, Node.js</li>
                    </ul>
                </div>
                <div className="project-card">
                    <div className="card-header">
                        <a href=""><h3>Tech Blog</h3></a>
                    </div>
                    <ul>
                        <li><b>GitHub:</b> <a href="">The Dog Dossier</a></li>
                        <li><b>Description:</b> A database containing information for dog owners and aspiring dog owners alike.</li>
                        <li><b>Languages:</b> HTML, CSS, Javascript, Sequelize, Node.js</li>
                    </ul>
                </div>
                <div className="project-card">
                    <div className="card-header">
                        <a href=""><h3>Tech Blog</h3></a>
                    </div>
                    <ul>
                        <li><b>GitHub:</b> <a href="">The Dog Dossier</a></li>
                        <li><b>Description:</b> A database containing information for dog owners and aspiring dog owners alike.</li>
                        <li><b>Languages:</b> HTML, CSS, Javascript, Sequelize, Node.js</li>
                    </ul>
                </div> */}
            </div>
        </section>
    );
}

export default Project;