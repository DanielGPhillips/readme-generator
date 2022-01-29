function readMeGenerator(inputs) {
    return `
# ${inputs.projTitle} 
        
![badge](https://img.shields.io/badge/license-${inputs.lic}-success)

## Description
    ${inputs.desc}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
    ${inputs.inst}

## Usage
    ${inputs.usage}

## License

![badge](https://img.shields.io/badge/license-${inputs.lic}-success)
    
    This app is covered by the ${inputs.lic} license.
    
## How to Contribute
    ${inputs.contr}

## Tests
    ${inputs.test}

## Questions

[My Github](https://github.com/${inputs.ghName})

[My email](mailto:${inputs.email})

_This README was generated using [Danny's README Generator](https://github.com/DanielGPhillips/readme-generator)_

`;
}

module.exports = readMeGenerator;