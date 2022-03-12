const Employee = require('./Employee')

class Intern extends Employee {
    constructor(school){
        this.school = school
        this.icon = 'fa-solid fa-user-graduate'
        this.role = 'intern'
    }
    // super();

    getSchool(){
        return this.school
    }

    getRole(){ // Overriden to return 'Intern'
        return 'Intern'
    }
}

module.exports = Intern