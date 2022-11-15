// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
      return ``;
    } else {
      return `[![${license} license](https://img.shields.io/badge/License-MIT-blue.svg)](${renderLicenseLink(license)})`
    }
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license === "MIT") {
      return `https://lbesson.mit-license.org/`
    }
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (!license) {
      return ``;
    } else {
      return `## Licenses
      This project is covered under the ${license} license`
    }
  }
    
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseBadge(data.licenses)}
  
    
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Licenses](#licenses)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Credits](#credits)
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
${renderLicenseSection(data.licenses)}
## Contributing
${data.Contributing}
## Tests
${data.tests}
## Questions
Have questions about this project?  
GitHub: https://github.com/${data.github}  
Email: ${data.email}
## Credits
${data.name}
  `;
  }
    
  
  // use for importing Markdown in index 
  module.exports = generateMarkdown;