const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/page-template');
const { writeFile } = require('./src/generate-site')

const team = [];
let currentTeam = team[team.length];

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
        currentTeam = team.push(new Engineer(answersEngineer.name, answersEngineer.id, answersEngineer.email, answersEngineer.role, answersEngineer.github));
        return addTeam();
    });
};

function addIntern() {
    inquirer.prompt(questionsIntern).then((answersIntern) => {
        currentTeam = team.push(new Intern(answersIntern.name, answersIntern.id, answersIntern.email, answersIntern.role, answersIntern.school));
        return addTeam();
    });
};

// function generateHTML() {
    // console.log(team); 
// };


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
            generateHTML()
            .then(pageHTML => {
                return writeFile(pageHTML);
            })
            .catch(err => {
                console.log(err);
            });    
        }
    })
};

function startTeam() {
    inquirer.prompt(questionsManager).then((answersManager) => {
        currentTeam = team.push(new Manager(answersManager.name, answersManager.id, answersManager.email, answersManager.role, answersManager.officeNumber));
        return addTeam();
        });
    };

startTeam();