const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school
        this.icon = 'fas fa-user-graduate'
    }

    getSchool(){
        return this.school
    }

    getRole(){ // Overriden to return 'Intern'
        return 'Intern'
    }
}

module.exports = Intern