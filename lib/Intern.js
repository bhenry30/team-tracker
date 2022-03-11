const Employee = require('./Employee')

class Intern extends Employee {
    constructor(school){
        this.school = school
    }
    // super();

    getSchool(){

    }

    getRole(){ // Overriden to return 'Intern'

    }
}

module.exports = Intern