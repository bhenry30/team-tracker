const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNum){
        super(name, id, email);
        this.officeNum = officeNum
        this.icon = 'fas fa-mug-hot'
    }
    getOfficeNum() {
        return this.officeNum
    }

    getRole() { //overidden to return 'Manager'
        return 'Manager'
    }

}
module.exports = Manager