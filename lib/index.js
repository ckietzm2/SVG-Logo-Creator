const fs = require('fs')
const inquirer = require('inquirer');
const promptsjs = require('./prompts.js')
const svgjs = require('./svg.js')

inquirer
  .prompt(promptsjs)
  .then((response) =>
    fs.writeFile('logo.svg', svgjs(response), (err) => 
    err ? console.error(err) : console.log('success!'))
  );