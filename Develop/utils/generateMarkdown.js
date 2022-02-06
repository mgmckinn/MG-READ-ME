
// TODO:  
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== null) {
    return `![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)`
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
  
  ##Description
  ${data.description}
  
  ##Table of Contents
  *[Installion](#installation)
  *Usage (#usage)
  ${renderLicenseSection(data.license)}
  *[Contributors](#contributors)
  *[Tests](#tests)
  *[Questions](#questions)
  
  ##Installation
  
  The following commands will be used to download the necessary packages for this project:
  ${data.install}
  
  ##Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  
  ##License
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  
  ##Contributors
  ${data.contributors}
  
  ##Tests
  ${data.tests}
  Use this command for running tests:
  ${data.tests}
  
  ##Questions
  GitHub Name: ${data.github}
  E-mail: ${data.email}
  ${data.projectName}
`;
}

module.exports = generateMarkdown;
