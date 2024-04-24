// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
const { type } = require("os");

// TODO: Create an array of questions for user input
const questions = [

    {
        type: "input",
        name: "title",
        message: "Please name your project:",
    },
    {
        type: "input",
        name: "description",
        message: "Please describe this project:",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select a license",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "none"],
    },
    {
        type: "input",
        name: "require",
        message: "List any project dependencies here:",
    },
    {
        type: "input",
        name: "usage",
        message: "State the languages or technologies associated with this project:",
    },
    {
        type: "input",
        name: "creator",
        message: "Please enter your GitHub username:",
    },
    {
        type: "input",
        name: "name",
        message: "Please enter your full name:",
    },
    {
        type: "input",
        name: "email",
        message: "Please your email address:",
    },
    {
        type: "input",
        name: "contributors",
        message: "Please list your contributors (if any):",
        default: "",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating your README file...");
        writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    });
}

// Function call to initialize app
init();
