const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes.js')

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
        console.log(answers.shape)
        let shape;
        if (answers.shape === 'Circle') {
            shape = new Circle(answers.sColor, answers.tColor);
        } else if (answers.shape === 'Triangle') {
            shape = new Triangle(answers.sColor, answers.tColor);
        } else if (answers.shape === 'Square') {
            shape = new Square(answers.sColor, answers.tColor);
        };
        const file = (data) => {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shape.render()}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.tColor}">${answers.text}</text>
            
        </svg>`
        }
            fs.writeFile('logo.svg', file(answers), function (err) {
                err ? console.error(err) : console.log("Generated logo.svg");
            })
    })