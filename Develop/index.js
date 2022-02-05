// TODO: Include packages needed for this application
    const inquirer = require("inquirer");
    const generateReadme = require("./utils/generateMarkdown");
    const utils = require("utils");
    const fs = require('fs');
   
// TODO: Create an array of questions for user input
function promptForQuestion() => {
    return inquirer.prompt('questions')
};
const questions = [
    {
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
    {
        type: "input",
        message: "Present insturctions on setting up your project and exaamples listing steps", 
        name:"usage"
    },
    {
        type: "list",
        message: "By which license is the project covered?",
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
        message: "Who do I contact with questions about the project? Please include GitHub user information and email address",
        name: "questions"
}
];

// TODO: Create a function to write README file

fs.writeToFile('README.md', 'questions', (err) => {
    if (err) {
        console.log(err);
        return 
    }
    console.log('file written successfully')

})

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponse, data) => {
        console.log("Create ReadMe");
        fs.writeFileSync("ReadMe.md", inquirerResponse, data);
}).catch((err) => {
    console.log(err);
})
}

// Function call to initialize app
questions()
.then((answers) => {
return generateReadme(answers);
})

.then(data => {
    return writefile(data);
})
.catch((err) => {
    console.log(err);
})

