class Manager extends Employee {
    constructor(officeNumber){
        this.number = officeNumber
    }
    super();
    
    getRole() { //overidden to return 'Manager'
    }

}