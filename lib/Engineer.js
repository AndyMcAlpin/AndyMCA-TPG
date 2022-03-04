const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, role, github) {
    super(name, id, email, role);

    this.role = 'Engineer';
    this.github = github;
    }
    getRole() {
        return `${this.role}`;
    }
    getGithub() {
        return `github.com/${this.github}`;
    }
}

module.exports = Engineer;