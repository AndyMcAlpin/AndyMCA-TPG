const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
    super(name, id, email, role);

    this.role = 'Manager';
    this.officeNumber = officeNumber;
    }
    getRole() {
        return `${this.role}`;
    }
}

module.exports = Manager;