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

function generateREADME ( {title, description, installation, usage, contribution, test, license, gitHub, email }) {
    return `
    # ${projTitle} ![](https://img.shields.io/badge/License-%22${license}%22-yellow.svg)
    ## Table of Contents
    1. [Description](#description)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [Contribution Guidelines](#contribution)
    5. [Test instructions](#test)
    6. [License](#license)
    7. [Questions](#questions)
    ## Description <a id="description"></a>
    ${description}
    ## Installation <a id="installation"></a>
    ${installation}
    ## Usage <a id="usage"></a>
    ${usage}
    ## Contribution Guidelines <a id="contribution"></a>
    ${contr}
    ## Test Instructions <a id="test"></a>
    ${test}
    ## License <a id="license"></a>
    This application's license is covered under the ${license} license.
    ## Questions <a id="questions"></a>
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