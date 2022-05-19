// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache 2.0 License') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (license == 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (license == 'Boost') {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  }
  if (license == 'BSD') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (license == 'Apache 2.0 License') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (license == 'Apache 2.0 License') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
}

function renderLicenseLink(license) {}

function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#install)
  - [Usage Information](#usage)
  - [License](#license)
  - [Contributions](#contribution)
  - [Tests](#test)
  - [Questions](#quesdev)

  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage Information
  ${data.usuage}

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}

  ## Contributions
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions:
  ${data.quesdev}
  - Email: ${data.email}
  - Github: [${data.github}](https://github.com/${data.github})
  
  `;
}

module.exports = generateMarkdown;
// module.exports = renderLicenseBadge;