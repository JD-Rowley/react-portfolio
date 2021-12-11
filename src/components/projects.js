import techBlog from '../assets/project_img/tech-blog.JPG';
import eCommerce from '../assets/project_img/e-commerce-backend.JPG';
import LocalGrub from '../assets/project_img/LocalGrub.JPG';
import noteTaker from '../assets/project_img/note-taker.JPG';
import socialNetwork from '../assets/project_img/social-network-api.JPG';
import teamProfile from '../assets/project_img/team-profile-generator.JPG';
import dogDossier from '../assets/project_img/dog-dossier.JPG';
import weatherImage from '../assets/project_img/weather-dashboard.JPG';
import runBuddy from '../assets/project_img/run-buddy.JPG';
import codeQuiz from '../assets/project_img/code-quiz.JPG';
import passwordGenerator from '../assets/project_img/password-generator.JPG';
import deepThoughts from '../assets/project_img/deep-thoughts.JPG';

const projects =

[
    {
        "title": "Tech Blog",
        "deploy": "https://cryptic-bastion-77900.herokuapp.com/",
        "github_url": "https://github.com/JD-Rowley/mvc-tech-blog",
        "github": "mvc-tech-blog",
        "description": "A blog site where tech enthusiasts can come together and talk about the latest technology.",
        "languages": "HTML, CSS, Javascript, Express.js, Sequelize, Node.js",
        "image": techBlog
    },
    {
        "title": " E-Commerce Backend",
        "deploy": null,
        "github_url": "https://github.com/JD-Rowley/e-commerce-backend",
        "github": "e-commerce-backend",
        "description": "A working backend for an E-Commerce website.",
        "languages": "Javascript, Express.js, Sequelize, Node.js",
        "image": eCommerce
    },
    {
        "title": "LocalGrub",
        "deploy": "https://gelenhaus.github.io/groupProject1/",
        "github_url": "https://github.com/Gelenhaus/groupProject1",
        "github": "LocalGrub",
        "description": "A website designed to cloak domestic violence shelter searches and user requests for 911 assistance.",
        "languages": "HTML, CSS, Javascript",
        "image": LocalGrub
    },
    {
        "title": "Note-Taker",
        "deploy": "https://secure-sea-43122.herokuapp.com/",
        "github_url": "https://github.com/JD-Rowley/express-note-taker",
        "github": "express-note-taker",
        "description": "An app for creating notes.",
        "languages": "HTML, CSS, Javascript, Express.js",
        "image": noteTaker
    },
    {
        "title": "Social Network API",
        "deploy": null,
        "github_url": "https://github.com/JD-Rowley/mongo-db-social-network-api",
        "github": "mongo-db-social-network-api",
        "description": "An API for social network application where users can post thoughts and reactions.",
        "languages": "HTML, CSS, Javascript, Express.js, Mongoose",
        "image": socialNetwork
    },
    {
        "title": "Team Profile Generator",
        "deploy": null,
        "github_url": "https://github.com/JD-Rowley/team-profile-generator",
        "github": "team-profile-generator",
        "description": "An app that dynamically generates a page for small teams of people at the workplace.",
        "languages": "HTML, CSS, Javascript, Inquirer",
        "image": teamProfile
    },
    {
        "title": "The Dog Dossier",
        "deploy": "https://the-dog-dossier.herokuapp.com/",
        "github_url": "https://github.com/JD-Rowley/dog-dossier",
        "github": "dog-dossier",
        "description": "An app for dog owners and lovers to share information with each other.",
        "languages": "HTML, CSS, Javascript, Express.js, Sequelize",
        "image": dogDossier
    },
    {
        "title": "Weather Dashboard",
        "deploy": "https://jd-rowley.github.io/weather-dashboard/",
        "github_url": "https://github.com/JD-Rowley/weather-dashboard",
        "github": "weather-dashboard",
        "description": "An app using third-party APIs to help travelers find weather information in their area.",
        "languages": "HTML, CSS, Javascript, APIs",
        "image": weatherImage
    },
    {
        "title": "Run Buddy",
        "deploy": "https://jd-rowley.github.io/run-buddy/",
        "github_url": "https://github.com/JD-Rowley/run-buddy",
        "github": "run-buddy",
        "description": "A website promoting a gym membership with personal trainers.",
        "languages": "HTML, CSS",
        "image": runBuddy
    },
    {
        "title": "Code Quiz",
        "deploy": "https://jd-rowley.github.io/code-quiz/",
        "github_url": "https://github.com/JD-Rowley/code-quiz",
        "github": "code-quiz",
        "description": "A webpage with a timed quiz about coding.",
        "languages": "HTML, CSS, Javascript",
        "image": codeQuiz
    },
    {
        "title": "Password Generator",
        "deploy": "https://jd-rowley.github.io/password-generator/",
        "github_url": "https://github.com/JD-Rowley/password-generator",
        "github": "password-generator",
        "description": "A webpage that accepts certain parameters to create a password.",
        "languages": "HTML, CSS, Javascript",
        "image": passwordGenerator
    },
    {
        "title": "Deep Thoughts",
        "deploy": "https://fast-eyrie-29672.herokuapp.com/",
        "github_url": "https://github.com/JD-Rowley/deep-thoughts",
        "github": "deep-thoughts",
        "description": "Deep Thoughts is a social media application where users can share their own thoughts and react to others' thoughts.",
        "languages": "HTML, CSS, Javascript, MongoDB, Express.js, React, GraphQL",
        "image": deepThoughts
    }
]

export default projects;