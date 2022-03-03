class Employee {
    constructor(name, email) {
        this.name = name;
        this.id = 3;
        this.email = email;
    }

    getName() {
        return `The employee's name is ${this.name}`;
    }
}

module.exports = Employee;