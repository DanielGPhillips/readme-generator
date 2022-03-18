const inquirer = require('inquirer');
const fs = require('fs');



const readmePrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projTitle',
            message: 'What is your project called?',
        },
        {
            type: 'input',
            name: 'description', 
            message: 'Please enter a detailed description of your project.'
        },
        {
            type: 'input', 
            name: 'installation',
            message: 'Please describe the installation requirements for your project.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please explain how to utilize your poject.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select which license you are utilizing:',
            choices: ['AGPLv3', 'GPLv3', 'LGPLv3', 'MPL2.0', 'Apache License 2.0', 'MIT License', 'BSL 1.0', 'Unilicense', 'Other']
        },
        {
            type: 'input',
            name: 'contr',
            message: 'Please state your contribution guidelines.',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please describe your testing instructions.',
        },
        {
            type: 'input',
            name: 'ghName',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email adress:',
        },
    ])
}

function generateREADME ( {projTitle, description, installation, usage, contr, test, license, ghName, email }) {
    return `
    # ${projTitle} 
    ![license badge](https://img.shields.io/badge/License-%22${license}%22-yellow.svg)
    ## Table of Contents
    1. [Description](#description)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [Contribution Guidelines](#contribution)
    5. [Test instructions](#test)
    6. [License](#license)
    7. [Questions](#questions)
    ## Description 
    ${description}
    ## Installation 
    ${installation}
    ## Usage 
    ${usage}
    ## Contribution Guidelines 
    ${contr}
    ## Test Instructions 
    ${test}
    ## License 
    This application's license is covered under the ${license} license.
    ## Questions 
    My GitHub profile is [${ghName}](https://github.com/${ghName}), and I can be reached for questions via email at [${email}](mailto:${email}).`
    
    }
    

function init () {
    readmePrompt()
        .then(data => fs.writeFile("./generated_files/README.md", generateREADME(data), (err) => {
            if(err){
              throw err;
            }
            console.log(`wrote README.md`);
        }))
}

init();