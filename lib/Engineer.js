const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, github){
        super(name, id);
        this.github = github;
        this.icon = 'fa-solid fa-glasses';
    }

    getGithub(){
    return `Github: <a href="https://github.com/${this.github}">${this.github}<a/>`
    }

    getRole(){ // Overriden to return 'Engineer'
        return 'Engineer'
    }
}

module.exports = Engineer