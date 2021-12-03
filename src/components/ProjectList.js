import React, { useState } from 'react';
import project from '../projects.json';

function ProjectList() {
    // const [currentProject] = useState([
    //     {
    //         title: 'Tech Blog',
    //         deploy: 'https://cryptic-bastion-77900.herokuapp.com/',
    //         github_url: 'https://github.com/JD-Rowley/mvc-tech-blog',
    //         github: 'Tech Blog',
    //         description: 'A blog site where tech enthusiasts can come together and talk about the latest technology.',
    //         languages: 'HTML, CSS, Javascript, Express.js, Sequelize, Node.js'
    //     },
    //     {
    //         title: ' E-Commerce Backend',
    //         deploy: '',
    //         github_url: 'https://github.com/JD-Rowley/e-commerce-backend',
    //         github: 'E-Commerce Backend',
    //         description: 'A working backend for an E-Commerce website.',
    //         languages: 'Javascript, Express.js, Sequelize, Node.js'
    //     },
    //     {
    //         title: 'LocalGrub',
    //         deploy: 'https://gelenhaus.github.io/groupProject1/',
    //         github_url: 'https://github.com/Gelenhaus/groupProject1',
    //         github: 'LocalGrub',
    //         description: 'A website designed to cloak domestic violence shelter searches and user requests for 911 assistance.',
    //         languages: 'HTML, CSS, Javascript'
    //     },
    //     {
    //         title: 'Note-Taker',
    //         deploy: 'https://secure-sea-43122.herokuapp.com/',
    //         github_url: 'https://github.com/JD-Rowley/express-note-taker',
    //         github: 'Express Note Taker',
    //         description: 'An app for creating notes.',
    //         languages: 'HTML, CSS, Javascript, Express.js'
    //     },
    //     {
    //         title: 'Social Network API',
    //         deploy: '',
    //         github_url: 'https://github.com/JD-Rowley/mongo-db-social-network-api',
    //         github: 'Social Network API (MongoDB)',
    //         description: 'An API for social network application where users can post thoughts and reactions.',
    //         languages: 'HTML, CSS, Javascript, Express.js, Mongoose'
    //     },
    //     {
    //         title: 'Team Profile Generator',
    //         deploy: '',
    //         github_url: 'https://github.com/JD-Rowley/team-profile-generator',
    //         github: 'Team Profile Generator',
    //         description: 'An app that dynamically generates a page for small teams of people at the workplace.',
    //         languages: 'HTML, CSS, Javascript, Inquirer'
    //     },
    //     {
    //         title: 'The Dog Dossier',
    //         deploy: 'https://the-dog-dossier.herokuapp.com/',
    //         github_url: 'https://github.com/JD-Rowley/dog-dossier',
    //         github: 'Dog Dossier',
    //         description: 'An app for dog owners and lovers to share information with each other.',
    //         languages: 'HTML, CSS, Javascript, Express.js, Sequelize'
    //     }
    // ])

    return(
        <div>
            <img src={photo} alt="tech-blog" />
        </div>
    );
}

export default ProjectList;