const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, officeNum){
        super(name, id);
        this.officeNum = officeNum
        this.icon = 'fa-solid fa-mug-hot'
    }
    getOfficeNum() {
        return this.officeNum
    }

    getRole() { //overidden to return 'Manager'
        return 'Manager'
    }

}
module.exports = Manager