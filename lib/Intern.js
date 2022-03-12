const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, school){
        super(name, id);
        this.school = school
        this.icon = 'fa-solid fa-user-graduate'
    }

    getSchool(){
        return this.school
    }

    getRole(){ // Overriden to return 'Intern'
        return 'Intern'
    }
}

module.exports = Intern