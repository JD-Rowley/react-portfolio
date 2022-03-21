import permacultureExchange from '../assets/project_img/permaculture-exchange.JPG'
import techBlog from '../assets/project_img/tech-blog.JPG';
import eCommerce from '../assets/project_img/e-commerce-backend.JPG';
import LocalGrub from '../assets/project_img/LocalGrub.JPG';
import recipeBook from '../assets/project_img/recipe-book.JPG';
import noteTaker from '../assets/project_img/note-taker.JPG';
import socialNetwork from '../assets/project_img/social-network-api.JPG';
import teamProfile from '../assets/project_img/team-profile-generator.JPG';
import dogDossier from '../assets/project_img/dog-dossier.JPG';
import weatherImage from '../assets/project_img/weather-dashboard.JPG';
import runBuddy from '../assets/project_img/run-buddy.JPG';
import codeQuiz from '../assets/project_img/code-quiz.JPG';
import passwordGenerator from '../assets/project_img/password-generator.JPG';
import deepThoughts from '../assets/project_img/deep-thoughts.JPG';
import budgetTracker from '../assets/project_img/budget-tracker.JPG';
import readmeGenerator from '../assets/project_img/readme-generator.JPG';
import dragAndDrop from '../assets/project_img/drag-and-drop.JPG';
import selectAndShare from '../assets/project_img/select-and-share.JPG';

const projects =

[
    {
        "title": "Utah Permaculture Exchange",
        "deploy": "https://permaculture-exchange.herokuapp.com/",
        "github_url": "https://github.com/JD-Rowley/permaculture-exchange",
        "github": "permaculture-exchange",
        "description": "A website for a non-profit where the community can trade useful items with each other.",
        "languages": "HTML, CSS, JavaScript, React.js, GraphQL, Node.js",
        "image": permacultureExchange
    },
    {
        "title": "The Dog Dossier",
        "deploy": "https://the-dog-dossier.herokuapp.com/",
        "github_url": "https://github.com/JD-Rowley/dog-dossier",
        "github": "dog-dossier",
        "description": "An app for dog owners and lovers to share information with each other.",
        "languages": "HTML, CSS, JavaScript, Express.js, Sequelize",
        "image": dogDossier
    },
    {
        "title": "Tech Blog",
        "deploy": "https://cryptic-bastion-77900.herokuapp.com/",
        "github_url": "https://github.com/JD-Rowley/mvc-tech-blog",
        "github": "mvc-tech-blog",
        "description": "A blog site where tech enthusiasts can come together and talk about the latest technology.",
        "languages": "HTML, CSS, JavaScript, Express.js, Sequelize, Node.js",
        "image": techBlog
    },
    {
        "title": "LocalGrub",
        "deploy": "https://gelenhaus.github.io/groupProject1/",
        "github_url": "https://github.com/Gelenhaus/groupProject1",
        "github": "LocalGrub",
        "description": "A website designed to cloak domestic violence shelter searches and user requests for 911 assistance.",
        "languages": "HTML, CSS, JavaScript",
        "image": LocalGrub
    },
    {
        "title": "Recipe Book",
        "deploy": "https://recipe-book-d0f8b.web.app/",
        "github_url": "https://github.com/JD-Rowley/recipe-book",
        "github": "recipe-book",
        "description": "An app created using Angular and TypeScript that allows the user to look up recipes and create ingredient lists.",
        "languages": "TypeScript, Angular, Firebase, Node.js",
        "image": recipeBook
    },
    {
        "title": "Budget Tracker",
        "deploy": "https://polar-tor-80486.herokuapp.com/",
        "github_url": "https://github.com/JD-Rowley/budget-tracker-pwa",
        "github": "budget-tracker-pwa",
        "description": "A progressive web application that gives users the ability to track spending and income.",
        "languages": "JavaScript, Express.js, Mongoose, Node.js",
        "image": budgetTracker
    },
    {
        "title": "Drag and Drop",
        "deploy": "https://jd-rowley.github.io/typescript-drag-and-drop/",
        "github_url": "https://github.com/JD-Rowley/typescript-drag-and-drop",
        "github": "typescript-drag-and-drop",
        "description": "A basic drag and drop application utilizing TypeScript.",
        "languages": "HTML, CSS, TypeScript, JavaScript",
        "image": dragAndDrop
    },
    {
        "title": "Deep Thoughts",
        "deploy": "https://fast-eyrie-29672.herokuapp.com/",
        "github_url": "https://github.com/JD-Rowley/deep-thoughts",
        "github": "deep-thoughts",
        "description": "Deep Thoughts is a social media application where users can share their own thoughts and react to others' thoughts.",
        "languages": "HTML, CSS, JavaScript, MongoDB, Express.js, React, GraphQL",
        "image": deepThoughts
    },
    {
        "title": "Weather Dashboard",
        "deploy": "https://jd-rowley.github.io/weather-dashboard/",
        "github_url": "https://github.com/JD-Rowley/weather-dashboard",
        "github": "weather-dashboard",
        "description": "An app using third-party APIs to help travelers find weather information in their area.",
        "languages": "HTML, CSS, JavaScript, APIs",
        "image": weatherImage
    },
    {
        "title": "Code Quiz",
        "deploy": "https://jd-rowley.github.io/code-quiz/",
        "github_url": "https://github.com/JD-Rowley/code-quiz",
        "github": "code-quiz",
        "description": "A webpage with a timed quiz about coding.",
        "languages": "HTML, CSS, JavaScript",
        "image": codeQuiz
    },
    {
        "title": "Note-Taker",
        "deploy": "https://secure-sea-43122.herokuapp.com/",
        "github_url": "https://github.com/JD-Rowley/express-note-taker",
        "github": "express-note-taker",
        "description": "An app for creating notes.",
        "languages": "HTML, CSS, JavaScript, Express.js",
        "image": noteTaker
    },
    {
        "title": "E-Commerce Backend",
        "deploy": null,
        "github_url": "https://github.com/JD-Rowley/e-commerce-backend",
        "github": "e-commerce-backend",
        "description": "A working backend for an E-Commerce website.",
        "languages": "JavaScript, Express.js, Sequelize, Node.js",
        "image": eCommerce
    },
    {
        "title": "Social Network API",
        "deploy": null,
        "github_url": "https://github.com/JD-Rowley/mongo-db-social-network-api",
        "github": "mongo-db-social-network-api",
        "description": "An API for social network application where users can post thoughts and reactions.",
        "languages": "HTML, CSS, JavaScript, Express.js, Mongoose",
        "image": socialNetwork
    },
    {
        "title": "Team Profile Generator",
        "deploy": null,
        "github_url": "https://github.com/JD-Rowley/team-profile-generator",
        "github": "team-profile-generator",
        "description": "An app that dynamically generates a page for small teams of people at the workplace.",
        "languages": "HTML, CSS, JavaScript, Inquirer",
        "image": teamProfile
    },
    {
        "title": "ReadMe Generator",
        "deploy": null,
        "github_url": "https://github.com/JD-Rowley/inquirer-driven-readme-generator",
        "github": "inquirer-driven-readme-generator",
        "description": "A README.md file generator designed to ease the burden of creating a README file by asking the user questions and populating the sections accordingly.",
        "languages": "JavaScript, Inquirer, Node.js",
        "image": readmeGenerator
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
        "title": "Password Generator",
        "deploy": "https://jd-rowley.github.io/password-generator/",
        "github_url": "https://github.com/JD-Rowley/password-generator",
        "github": "password-generator",
        "description": "A webpage that accepts certain parameters to create a password.",
        "languages": "HTML, CSS, JavaScript",
        "image": passwordGenerator
    },
    {
        "title": "Select and Share",
        "deploy": "https://jd-rowley.github.io/typescript-select-and-share/",
        "github_url": "https://github.com/JD-Rowley/typescript-select-and-share",
        "github": "typescript-select-and-share",
        "description": "A basic application written using TypeScript, utilizing Google Maps API to find locations searched by the user.",
        "languages": "HTML, CSS, TypeScript, JavaScript, Axios, Google Maps API",
        "image": selectAndShare
    },
]

export default projects;