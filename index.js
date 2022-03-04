const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const questionsManager = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter the team manager's name"
    },
    {
        type: 'number',
        name: 'id',
        message:"please enter the team manager's employee ID number"
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the team manager's Email address"
    },
    {
        type: 'number',
        name: 'officeNumber',
        message:"please enter the team manager's office number"
    }];

const questionsEngineer = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter the team member's name"
    },
    {
        type: 'number',
        name: 'id',
        message:"please enter the team member's employee ID number"
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the team member's Email address"
    },
    {
        type: 'input',
        name: 'github',
        message:"please enter the engineer's github account name"
    }];

const questionsIntern = [...questionsEngineer]
questionsIntern.pop();
questionsIntern.push({type: 'input',
name: 'school',
message:"please enter the intern's school name"});

function addEngineer() {
    inquirer.prompt(questionsEngineer).then((answersEngineer) => {
        this.engineers.push = new Engineer(answersEngineer.name, answersEngineer.id, answersEngineer.email, answersEngineer.github);
        return addTeam();
    });
};

function addIntern() {
    inquirer.prompt(questionsIntern).then((answersIntern) => {
        this.interns.push = new Intern(answersIntern.name, answersIntern.id, answersIntern.email, answersIntern.school);
        return addTeam();
    });
};

function generateHTML() {
    console.log(this);
};

function addTeam() {
    inquirer.prompt({
        type: 'list',
        message: 'Would you like to add a team member?',
        name: 'memberAdd',
        choices: ['Engineer', 'Intern', 'None']
    })
    .then(({ memberAdd }) => {
        if (memberAdd === 'Engineer') {
            return addEngineer();
        } if (memberAdd === 'Intern') {
            return addIntern();
        } else {
            generateHTML();
        }
    })
};

function startTeam() {
    inquirer.prompt(questionsManager).then((answersManager) => {
        this.manager = new Manager(answersManager.name, answersManager.id, answersManager.email, answersManager.officeNumber)
        this.engineers = [];
        this.interns = [];
        return addTeam();
        });
    };

startTeam();