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
            newEmployee = new Manager(name, id, email, employee.officeNum);
            specificInfo = '<strong>Office Number:</strong> ' + newEmployee.getOfficeNum();
            break;
        case 'Engineer':
            newEmployee = new Engineer(name, id, email, employee.github);
            specificInfo = newEmployee.getGithub();
            break;
        case 'Intern':
            newEmployee = new Intern(name, id, email, employee.school);
            specificInfo = '<strong>School:</strong> ' + newEmployee.getSchool();
            break;
    }
    
    cards += 
    `
    <div class="column is-4">
    <div class="card">
      <div class="card-content">
        <div class="media-content">
          <span class="icon">
            <i class="${newEmployee.getIcon()}"></i>
          </span>
          <p class="title is-4">${newEmployee.getName()}</p>
          <p class="subtitle is-6">${newEmployee.getRole()}</p>
        </div>
        </br>
        </br>
        <div class="content">
        <p><strong>ID:</strong> ${newEmployee.getID()}</p>
        <p><strong>Email:</strong> <span id='email'><a href='mailto:${newEmployee.getEmail()}'>${newEmployee.getEmail()}</a></span></p>
        <p>${specificInfo}</p>
        </div>
      </div>
    </div>
    </div>
    `
    });
    return cards;
}

const generatePage = templateData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Tracker</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
        <script src="https://kit.fontawesome.com/1e8a253695.js" crossorigin="anonymous"></script>
    </head>
    <body>
    <nav class="navbar is-primary">
      <div class="navbar-item title has-text-white has-text-centered py-5">
      The Team
      </div>
    </nav>
    <main>
    <section class="section">
      <div class="container">
        <div class="columns is-variable mt-3 is-4">
          ${generateEmployee(templateData)}
        </div>
      </div>
    </section>    
    </main>
    </body>
    </html>
    `
}

module.exports = generatePage
