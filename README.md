# SVG File Maker
This project was created for my module 10 assignment where I needed to create a node program that would take user input using inquirer, and generate their answers into a svg file. It was created in accordance to the following user story and acceptance criteria.

## User Story
```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```
## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```
## How to use

Run npm i to install all the packages required. Then run node index.js to start the program. Answer the questions that appear, and once you finish, the console will log "Generated logo.svg". Navigate to the logo.svg file and the code generated will be there. Open the file in your browser to view the logo.

## Links

https://github.com/jregues/svg-file-maker

