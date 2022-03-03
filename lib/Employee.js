class Employee {
    constructor(name, email, id) {
        this.name = name;
        this.id = id;
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
}

module.exports = Employee;