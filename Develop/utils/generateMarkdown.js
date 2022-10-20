// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "No license"){
    return "";
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "No license"){
    return "";
  } else{
    return "- [License](#License)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No license"){
    return "";
  } else if (license == "MIT"){
    return `

Copyright 2022

![MIT License](https://img.shields.io/badge/license-MIT-orange.png)`
  } else if(license == "Unlicense"){
    return `

Copyright 2022
    ![Ulicensed](https://img.shields.io/badge/license-Unlicensed-orange.png)
    `
  } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ## Description 
  ${data.Description}

  ## Table of Content (Optional)
   - [Installation](#installation)
   - [Usage](#Usage)
   - [Credits](#Credits)
    ${renderLicenseLink(data.License)}

   ## Installation
   ${data.Installation}

  ## Usage 
  ${data.Usage}
  
  ## credit
  ${data.Credits}
  
  ## License
  ${renderLicenseSection(data.License)}

  ## Features
  ${data.Features}

  ## How to Contribute
  ${data.Contribute}

  ## Test
  ${data.Test}

  ## question 
  ${data.Emailaddress}
  ${data.Githubusername}

`;
}

module.exports = generateMarkdown;
