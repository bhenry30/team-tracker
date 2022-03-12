const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(github){
        this.github = github;
        this.icon = 'fa-solid fa-glasses';
    }
    // super();

    getGithub(){
    return this.github
    }

    getRole(){ // Overriden to return 'Engineer'
        return 'Engineer'
    }
}

module.exports = Engineer