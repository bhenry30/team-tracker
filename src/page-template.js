const Manager = require('../lib/Manager')
const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')


const generateEmployee = employeeInfo => {

    let cards = '';
    
    employeeInfo.forEach(employee => {
    
    const { name, id, role, email } = employee;
    let newEmployee = '';
    let specificInfo = '';

    switch (role) {
        case 'Manager':
            newEmployee = new Manager(name, id, email, employee.number);
            specificInfo = newEmployee.getOfficeNum();
            break;
        case 'Engineer':
            newEmployee = new Engineer(name, id, email, employee.github);
            specificInfo = newEmployee.getGithub();
            break;
        case 'Intern':
            newEmployee = new Intern(name, id, email, employee.school);
            specificInfo = 'School:' + newEmployee.getSchool();
            break;
      }
    
    cards += 
    `
    <div class="row">
      <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">${newEmployee.getName()}</span>
            <p>
            ${newEmployee.getIcon()} ${newEmployee.getRole()}</br>
            ID: ${newEmployee.getID()}</br>
            Email: <span id='email'><a href='mailto:${newEmployee.getEmail()}'>${newEmployee.getEmail()}</a></span></br>
            ${specificInfo}
            </p>
          </div>
        </div>
      </div>
    </div>
    `
    })
}

const generatePage = templateData => {
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="stylesheet" href="syle.css" />
        <title>Team Tracker</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    </head>
    <body>
    <header>
        
        <div class='row blue m0 lighten-1'>
            <h2 class='white-text col s4 center-align'>My Team</h1>
        </div>
    </header>
    <main>
        <div>
            ${generateEmployee(templateData)}
        </div>
    </main>
    </body>
    </html>
    `
}

module.exports = generatePage