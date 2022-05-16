const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github username',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your Github username!');
                    return false;
                }
            }
        },
    ]);
};

const prompProject = portfolioData => {
    portfolioData.projects = [];
    //if there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }

    console.log(`
    =================
    Add a New Project
    ================
    `);
     return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project. (required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description for your project!');
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the requirements for installation?' 
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How will your application be used?' 
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please list the contribution guidelines.' 
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide the test instructions.' 
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])

    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return prompProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
};


promptUser()
 .then(prompProject)
 .then(portfolioData => {
     console.log(portfolioData);
 });
// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github)

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw new Error(err);

//   console.log('README complete! Check out index.html to see the output!');
// });

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README