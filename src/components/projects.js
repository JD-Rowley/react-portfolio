import techBlog from '../assets/project_img/tech-blog.JPG';
import eCommerce from '../assets/project_img/e-commerce-backend.JPG';
import LocalGrub from '../assets/project_img/LocalGrub.JPG';
import noteTaker from '../assets/project_img/note-taker.JPG';
import socialNetwork from '../assets/project_img/social-network-api.JPG';
import teamProfile from '../assets/project_img/team-profile-generator.JPG';
import dogDossier from '../assets/project_img/dog-dossier.JPG';
import weatherImage from '../assets/project_img/weather-dashboard.JPG';

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
        "languages": "HTML, CSS, Javascript",
        "image": weatherImage
    }
]

export default projects;