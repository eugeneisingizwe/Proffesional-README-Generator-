// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of your project? (required)",
    name: "projectTitle",
    validate: projectTitleInput => {
        if (projectTitleInput) {
            return true;
        } else {
            console.log("Please enter project title");
            return false;
        }
    }
},

{
    type: "input",
    message: "What is the project description?",
    name: "Description",
    validate: projectDescriptionInput => {
        if (projectDescriptionInput) {
            return true;
        } else {
            console.log("Please enter the project description");
            return false;
        }
    }
},

{
    type: "input",
    message: "What are the steps required to install your project?",
    name: "Installation",
    validate: projectIntallationInput => {
        if (projectIntallationInput) {
            return true;
        } else {
            console.log("Please provide a step-by-step description of how to get the development environment running.");
            return false;
        }
    }
},

{
    type: "input",
    message: "Provide instructions and examples for use. Include screenshots as needed.",
    name: "Usage",
    validate: projectUsageInput => {
        if (projectUsageInput) {
            return true;
        } else {
            console.log("Please provide instructions and examples for use. Include screenshots as needed.");
            return false;
        }
    }
},

{
    type: "input",
    message: "List your collaborators, if any, with links to their GitHub profiles.",
    name: "Credits",
    validate: projectCreditsInput => {
        if (projectCreditsInput) {
            return true;
        } else {
            console.log("Please list your collaborators, if any, with links to their GitHub profiles");
            return false;
        }
    }
},
{
    type: "list",
    message: "The last section of a high-quality README file is the license.",
    name: "License",
   choices: ["MIT", "Unlicense" , "No license"]
},

{
    type: "input",
    message: "If your project has a lot of features, list them here.",
    name: "Features",
    validate: projectFeaturesInput => {
        if (projectFeaturesInput) {
            return true;
        } else {
            console.log("Please list project features.");
            return false;
        }
    }
},
{
    type: "input",
    message: "If you created an application or package and would like other developers to contribute.",
    name: "Contribute",
    validate: projectContributeInput => {
        if (projectContributeInput) {
            return true;
        } else {
            console.log("Please enter project contrubte requirement if applicable");
            return false;
        }
    }
},
{
    type: "input",
    message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
    name: "Test",
   validate: confirmTest => {
    if (confirmTest){
        return true
    } else {
        return false;
    }
   }
},
{
    type: "input",
    message: "Enter Github username! (required)",
    name: "Githubusername",
    validate: gitHubInput => {
        if (gitHubInput) {
            return true;
        } else {
            console.log("Please enter your github username");
            return false;
        }
    }
}, 

{
    type: "input",
    message: "Enter your email address (required)",
    name: "Emailaddress",
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log("Please enter your email address");
            return false;
        }
    }
},    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => error ? console.error(error) : console.log("success!"));
}

// TODO: Create a function to initialize app
function init() { 
    inquirer   
    .prompt(questions)
        .then((response) => {
            console.log(response);
            writeToFile("README.md", generateMarkdown(response))
        })
}

// Function call to initialize app
init();
