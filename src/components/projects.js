import permacultureExchange from '../assets/project_img/permaculture-exchange.JPG'
import techBlog from '../assets/project_img/tech-blog.JPG';
import recipeBook from '../assets/project_img/recipe-book.JPG';
import socialNetwork from '../assets/project_img/social-network-api.JPG';
import dogDossier from '../assets/project_img/dog-dossier.JPG';

const projects =

[
    {
        "title": "Utah Permaculture Exchange",
        "deploy": "https://permaculture-exchange.herokuapp.com/",
        "github_url": "https://github.com/JD-Rowley/permaculture-exchange",
        "github": "permaculture-exchange",
        "description": "A website for a non-profit where the community can trade useful items with each other.",
        "language": "JavaScript",
        "tools": "apollo-client, graphql, react-router, reactjs",
        "image": permacultureExchange
    },
    {
        "title": "The Dog Dossier",
        "deploy": "https://the-dog-dossier.herokuapp.com/",
        "github_url": "https://github.com/JD-Rowley/dog-dossier",
        "github": "dog-dossier",
        "description": "An app for dog owners and lovers to share information with each other.",
        "language": "JavaScript",
        "tools": "connect-session-sequelize, express-session, expressjs, handlebarsjs, inquirer, mysql2, sequelize, simplecrypt",
        "image": dogDossier
    },
    {
        "title": "Tech Blog",
        "deploy": "https://cryptic-bastion-77900.herokuapp.com/",
        "github_url": "https://github.com/JD-Rowley/mvc-tech-blog",
        "github": "mvc-tech-blog",
        "description": "A blog site where tech enthusiasts can come together and talk about the latest technology.",
        "language": "JavaScript",
        "tools": "bcrypt, connect-session-sequelize, expressjs, handlebarsjs, mysql2, sequelize",
        "image": techBlog
    },
    {
        "title": "Recipe Book",
        "deploy": "https://recipe-book-d0f8b.web.app/",
        "github_url": "https://github.com/JD-Rowley/recipe-book",
        "github": "recipe-book",
        "description": "An app created using Angular and TypeScript that allows the user to look up recipes and create ingredient lists.",
        "language": "TypeScript",
        "tools": "angular, typescript",
        "image": recipeBook
    },
    {
        "title": "Social Network API",
        "deploy": null,
        "github_url": "https://github.com/JD-Rowley/mongo-db-social-network-api",
        "github": "mongo-db-social-network-api",
        "description": "An API for social network application where users can post thoughts and reactions.",
        "language": "JavaScript",
        "tools": "expressjs, mongoose",
        "image": socialNetwork
    },
]

export default projects;