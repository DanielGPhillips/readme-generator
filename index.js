const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const readMeGenerator = require('./utils/readMeGenerator');
const asyncWrite = util.promisify(fs.writeFile);


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

async function init() {
    try {
        const inputs = await promptUser();
        const generateReadMe = readMeGenerator(inputs);
        asyncWrite('./generated_files/README.md', generateReadMe);
        console.log('Successfully wrote README.md');
    }
    catch(err) {
        console.log('Uh Oh! An Error Occured.');
        throw err;        
    }
    
}
init();