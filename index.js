const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = (answers) =>
  `## Table of Contents
- [Title](#title)
- [Description](#summary)
- [Installation](#installation)
- [License](#license)
- [Tests](#tests)
- [Username](#username)
- [Email](#email)

<h1 align="center">${answers.projectTitle}</h1>

## Title
${answers.Title}

## Summary
${answers.summary}

## Installation
${answers.installation}

## License
${answers.license}

## Tests
${answers.tests}

## Username
${answers.username}

## Email
${answers.email}`;

inquirer
  .prompt([
    {
      type: "input",
      name: "Title",
      message: "What is the title of the project?",
    },
    {
      type: "input",
      name: "summary",
      message: "Write a summary of the project: ",
    },
    {
      type: "input",
      name: "installation",
      message: "What command should be run to install dependencies: ",
    },
    {
      type: "list",
      name: "license",
      message: "Choose the appropriate license for this project: ",
      choices: [
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open",
      ]
    },
    {
      type: "input",
      name: "tests",
      message: "What command should be run to run tests?"
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
    },
  ])
  .then((answers) => {
    const generateContent = generateReadme(answers);

    fs.writeFile('README.md', generateContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md')
    );
  });