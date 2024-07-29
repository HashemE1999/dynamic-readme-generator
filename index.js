// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Briefly describe your project:",
    },
    {
        type: "input",
        name: "installation",
        message: "Provide installation instructions:",
    },
    {
        type: "input",
        name: "usage",
        message: "Describe the intended usage of your application:",
    },
    {
        type: "input",
        name: "contributions",
        message: "How can other developers contribute to your project?",
    },
    {
        type: "input",
        name: "testing",
        message: "Write some tests for your application:",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your application:",
        choices: ["MIT", "GPLv3", "Apache 2.0", "BSD 3-Clause", "None"],
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter the email associated with your GitHub account:",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log("README.md created successfully!")
    });
}
// TODO: Create a function to initialize app
function init() {
     // Use inquirer to prompt the user for input
  inquirer.prompt(questions)

  .then((answers) => {
    const READMEcontent = generateMarkdown(answers);
    writeToFile("README.md", READMEcontent);
    });
}

// Function call to initialize app
init();
