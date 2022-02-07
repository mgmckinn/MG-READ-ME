
// TODO:  
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== null) {
    return `![badge](https://img.shields.io/badge/license-${data.license}-brightorange)`
  }
  return ""
}
  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== null) {
    return '\n* [license](#license)\n'
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== null) {
    return(`## license
    this repository is licensed under ${license}license`)
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${data.GitHub}
  ${renderLicenseSection(data.license)}
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
## Description
${data.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)
## Installation
 ${data.installation}
## Usage
${data.usage}
## License
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
<br />
This application is covered by the ${data.license} license. 
## contributors
 ${data.contributors}
## Tests
${data.tests}
## Questions
 ${data.questions}<br />
<br />
:octocat: Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
<br />
✉️ Email me with any questions: ${data.email}<br /><br />

_This README was generated with ❤️ by [README-generator](https://github.com/mgmckinn/MG-READ-ME)
`;
  };

module.exports = generateMarkdown;
