const Employee = require('./Employee')

class Manager extends Employee {
    constructor(officeNumber){
        this.number = officeNumber
        this.icon = 'fa-solid fa-mug-hot'
    }
    // super();
    
    getRole() { //overidden to return 'Manager'
        return 'Manager'
    }

}
module.exports = Manager