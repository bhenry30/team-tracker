const generateEmployee = employeeInfo => {

    let cards = '';
    
    employeeInfo.forEach(employee => {
    
    const { name, id, role, email } = employee;
    let newEmployee = '';
    let specificInfo = '';
    
    
    cards += 
    `
    <div class="row">
      <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">${employee.name}</span>
            <p>
            ${employee.id}
            ${employee.email}
            ${specificInfo}
            </p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
    `
}

const generatePage = templateData => {
    
    return 
    `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
            <link rel="stylesheet" href="syle.css" />
            <title>Team Tracker</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        </head>

        <body>
    
            <header>
                <h1>>Header</h1>
            </header>
            
            <script src="Index.js"></script>
        </body>
    </html>`
}