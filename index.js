// Pseudo code
// GIVEN a command-line application that accepts user input
// 1. Prompt for employee's name, email, id, role
    // THEN based on role, run prompts/methods according to role class
// 2. Generate HTML page based on user inputs
    // 1. make cards for each role in the page-template.js
    //      a. use literals to populate the info into the cards
    // 2. create writeFile and copyFile functions in generate-site.js using fs so that style.css will be applied to generated html file
// 3. Make email clickable --> default email program opens and populates TO field
// 4. Make GitHub profile clickable

// WHEN I start the application
    // THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
    // THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
    // THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
    // THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
    // THEN I exit the application, and the HTML is generated

// Dependencies
const inquirer = require('inquirer')
const writeFile = require('./utils/generate-site')
const generatePage = require('./src/page-template')

const employees = []

const promptUser = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the employee?',
                validate : nameInput => {
                    if (nameInput) {
                        return true
                    } else {
                        console.log('Please enter the name of the employee!');
                        return false
                    }
                }

            },
            {
                type: 'input',
                name: 'id',
                message: 'What is their employee ID?',
                validate : idInput => {
                    if (idInput) {
                        return true
                    } else {
                        console.log('Please enter the ID of the employee!');
                        return false
                    }
                }
    
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email address of the employee?',
                validate : emailInput => {
                    if (emailInput) {
                        return true
                    } else {
                        console.log('Please provide the email address of the employee!');
                        return false
                    }
                }
    
            },
            {
                type: 'list',
                name: 'role',
                message: 'What is the role of the employee?',
                choices: ['Manager', 'Engineer', 'Intern'],
                validate : roleInput => {
                    if (roleInput) {
                    return true
                    } else {
                    console.log('Please enter the name of the employee!');
                    return false
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school does the intern attend?',
                when: ({ role }) => {
                    if (role === 'Intern') {
                        return true
                    } else {
                        return false
                    }
                },
                validate : schoolInput => {
                    if (schoolInput) {
                        return true
                    } else {
                        console.log('Please provide the school that the intern attends!');
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the GitHub profile name of the engineer?',
                when: ({ role }) => {
                    if (role === 'Engineer') {
                        return true
                    } else {
                        return false
                    }
                },
                validate : githubInput => {
                    if (githubInput) {
                        return true
                    } else {
                        console.log('Please provide the GitHub profile name of the engineer!');
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNum',
                message: 'What is the manager\'s office number?',
                when: ({ role }) => {
                    if (role === 'Manager') {
                        return true
                    } else {
                        return false
                    }
                },
                validate : officeNumInput => {
                    if (officeNumInput) {
                        return true
                    } else {
                        console.log('Please provide the GitHub profile name of the engineer!');
                        return false
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmAdd',
                message: 'Would you like to add another employee to the team?',
                default: true
            }

        ])
        .then(userResponse => {
            employees.push(userResponse)
            if (userResponse.confirmAdd) {
                return promptUser();
            }
            console.log(employees)
            return employees;
        })
};

promptUser().then(userData => generatePage(userData))
.then(html => writeFile(html))
.catch(err => console.log(err));