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

const promptUser = () => {
    
}