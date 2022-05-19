const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/generate-page');

const promptUser = [
    // Project title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('This section is required.');
                return false;
            }
        }
    },
    // Project Description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project. Think "who, what why?" (required',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('This section is required.');
                return false;
            }
        }
    },
    // Project Installation
    {
        type: 'input',
        name: 'install',
        message: 'What are the requirements to install your project? (required)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('This section is required.');
                return false;
            }
        }
    },
    // Project Usage Info
    {
        type: 'input',
        name: 'usage',
        message: 'How will your project be used? (required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('This section is required.');
                return false;
            }
        }
    },
    // Project Licensing
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for your project or choose none. (required)',
        choices: ['MIT', 'BSD', 'Ms-PL', 'Apache', 'None'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('This section is required.');
                return false;
            }
        }
    },
    // Project Contributions
    {
        type: 'input',
        name: 'contribution',
        message: 'Please list the contribtors involved in your project. (required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('This section is required.');
                return false;
            }
        }
    },
    // Project Testing
    {
        type: 'input',
        name: 'test',
        message: 'How are users able to test your project? (required)',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('This section is required.');
                return false;
            }
        }
    },
    // Project Questions/Future Dev
    {
        type: 'input',
        name: 'quesdev',
        message: 'Please list any questions or future development plans you have for your project or type N/A. (required)',
        validate: quesdevInput => {
            if (quesdevInput) {
                return true;
            } else {
                console.log('This section is required.');
                return false;
            }
        }
    },
    // User Email - to be added to Questions section
    {
        type: 'input',
        name: 'email',
        message: 'Please include your email to be reached for any further contact. (required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('This section is required.');
                return false;
            }
        }
    },
    // User GitHub - to be added to Questions section
    {
        type: 'input',
        name: 'github',
        message: 'Please include your GitHub username to be reached for any further contact. (required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('This section is required.');
                return false;
            }
        }
    },
];

// Function to generate READme
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Thank you! Your information has been properly submitted and generated into a README.')
    });
};

// Function to initialize app
function init() {
    inquirer.prompt(promptUser)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generatePage(userInput));
    });
};

// Function call
init();