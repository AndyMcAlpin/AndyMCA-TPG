class Employee {
    constructor(name, email) {
        this.name = name;
        this.id = Employee.length;
        this.email = email;
    }

    getName() {
        return `The employee's name is ${this.name}`;
    }

    getID() {
        return `${this.id}`;
    }

    getEmail() {
        return `${this.email}`;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;