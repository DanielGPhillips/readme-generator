const inquirer = require('inquirer');
const fs = require('fs');

// Generate README prompts
//Inputs must include project title, description, installation instructions, 
// usage information, contribution guidelines, and test instructions.
//Lists must include license and badges
//GitHub username to link
//email adress to link
//function table of contents links
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projTitle',
            message: 'What is your project called?',
        },
        {
            type: 'input',
            name: 'desc', 
            message: 'Please enter a detailed description of your project.'
        },
        {
            type: 'input', 
            name: 'inst',
            message: 'Please describe the installation requirements for your project.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please explain how to utilize your poject.',
        },
        {
            type: 'list',
            name: 'lic',
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