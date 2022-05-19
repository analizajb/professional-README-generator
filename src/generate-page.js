function generatePage(data) {
  return `# ${data.title}
  
  ##Licensing: to appear here
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#install)
  - [Usage Information](#usage)
  - [Contributions](#contribution)
  - [Tests](#test)
  - [Questions](#quesdev)

  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage Information
  ${data.usuage}

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

module.exports = generatePage;