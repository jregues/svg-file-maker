const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
const Circle = require('./lib/shapes.js')
const Triangle = require('./lib/shapes.js')
const Square = require('./lib/shapes.js')
const questions = [{
    type: 'input',
    message: 'Please enter the text for your logo. Your text is limited to three characters',
    name: 'text'
},
{
    type: 'input',
    message: 'Please enter the color choice for your text',
    name: 'tColor'
},
{
    type: 'list',
    message: 'Please choose a shape',
    name: 'shape',
    choices: ['Circle', 'Triangle', 'Square']
},
{
    type: 'input',
    message: 'Please enter the color choice for your shape',
    name: 'sColor'
}];


inquirer 
    .prompt(questions)

    .then((answers) => {
        if (answers.shape === 'Circle') {
            answers.shape = Circle.draw();
        } else if (answers.shape === 'Triangle') {
            answers.shape = Triangle;
        } else if (answers.shape === 'Square') {
            answers.shape = Square;
        };
        const file = (data) => {
            return `<svg xmlns="file:///C:/Users/james/bootcamp/git-lab/svg-file-maker/logo.svg" width="300" height="300">
            <${answers.shape} x="10" y="10" width="300" height="300" fill="${answers.sColor}" />
            <text x="10" y="10" fill="${answers.tColor}">${answers.text}</text>
            
        </svg>`
        }
            fs.writeFile('logo.svg', file(answers), function (err) {
                err ? console.error(err) : console.log("Generated logo.svg");
            })
    })