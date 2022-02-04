// TODO: Include packages needed for this application
    const inquirer = require("inquirer");
    const generateReadme = require("./utils/generateMarkdown");
    const utils = require("utils");
    const fs = require('fs');
const { type } = require("os");
   
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "title"
    },
    {
        type: "input",
        message: "Give a brief description of the project",
        name: "description"
    },
    {
        type: "input",
        message: "Create a Table of Contents",
        name: "Table of Contents"
    },
    {
        type: "input",
        message: "What steps are required to install the project? Give a step by step description",
        name: "installation"
    },

        type: "input",
        message: "Present insturctions on setting up your project and exaamples listing steps", 
        name: "usage"

    },
    {
        type: "list",
        message: "Choose license for your project",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        message: "Who are the contributors to this project?",
        name: "contributors"
    },
    {
        type: "input",
        message: "Are there tests included in this project?",
        name: "tests"
    },
    {
        type: "input",
        

    }
}];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
