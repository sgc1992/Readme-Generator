// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input

function promptUser(){
  return inquirer.prompt([
      {
          type: "input",
          name: "projectTitle",
          message: "What is the title of the project?",
      },
      {
          type: "input",
          name: "description",
          message: "Write a summary of the project: "
      },
      {
          type: "input",
          name: "installation",
          message: "Describe the installation process if any: ",
      },
      {
          type: "input",
          name: "usage",
          message: "What is the aim of the project?"
      },
      {
          type: "list",
          name: "license",
          message: "Chose the appropriate license for this project: ",
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
          name: "contributing",
          message: "Enter the name of the members involved in the project?"
      },
      {
          type: "input",
          name: "tests",
          message: "Is there a test included?"
      },
      {
          type: "input",
          name: "questions",
          message: "What action should we take when we have an issue? "
      },
      {
          type: "input",
          name: "username",
          message: "Please enter your GitHub username: "
      },
      {
          type: "input",
          name: "email",
          message: "Please enter your email: "
      }
  ]);
} 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
