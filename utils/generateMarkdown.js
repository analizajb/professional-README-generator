// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'GNU AGPLv3') {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
  }
  if (license == 'GNU GPLv3') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  if (license == 'GNU LGPLv3') {
    return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0) `;
  }
  if (license == 'Mozilla Public License 2.0') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }
  if (license == 'Apache License 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (license == 'MIT License') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (license == 'Boost Software License 1.0') {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  }
  if (license == 'The Unlicense') {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }
  if (license == 'None') {
    return `No licenses for this project have been submitted.`;
  }
};

function renderLicenseLink(license) {
  if (license == 'GNU AGPLv3') {
    return `(https://www.gnu.org/licenses/agpl-3.0)`;
  }
  if (license == 'GNU GPLv3') {
    return `(https://www.gnu.org/licenses/gpl-3.0)`;
  }
  if (license == 'GNU LGPLv3') {
    return `(https://www.gnu.org/licenses/lgpl-3.0)`;
  }
  if (license == 'Mozilla Public License 2.0') {
    return `(https://opensource.org/licenses/MPL-2.0)`;
  }
  if (license == 'Apache License 2.0') {
    return `(https://opensource.org/licenses/Apache-2.0)`;
  }
  if (license == 'MIT License') {
    return `(https://opensource.org/licenses/MIT)`;
  }
  if (license == 'Boost Software License 1.0') {
    return `(https://www.boost.org/LICENSE_1_0.txt)`;
  }
  if (license == 'The Unlicense') {
    return `(http://unlicense.org/)`;
  }
  if (license == 'None') {
    return ``;
  }

}

function renderLicenseSection(license) {
  return `${license}`
 }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#install)
  - [Usage Information](#usage)
  - [License](#license)
  - [Contributions](#contribution)
  - [Tests](#test)
  - [Questions/Future Development](#quesdev)

  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage Information
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contributions
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions/Future Development:
  ${data.quesdev}
  - Email me at <${data.email}>
  - Check me out on [GitHub](https://github.com/${data.github})
  
  `;
}

module.exports = generateMarkdown;

// module.exports = renderLicenseBadge;