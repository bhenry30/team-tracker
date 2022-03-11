const inquirer = require("inquirer")

class Employee {
    constructor(name, id, email){
        this.name = name
        this.email = email
        this.id = id
    };

    getName() {
        return inquirer.prompt(
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

            })
    };

    getID() {
        return inquirer.prompt(
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
    
            })
    };
    
    getEmail() {
        return inquirer.prompt(
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
    
            })
    };

    getRole() { // returns 'Employee'
        return inquirer.prompt(
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

        }).then(({ role }) => {
            if (role === 'Manager') {
                
            }
        })
    };
}

module.exports = Employee