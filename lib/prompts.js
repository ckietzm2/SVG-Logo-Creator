const questions = [
    {
      type: 'text',
      message: 'Please enter 3 characters of text:',
      name: 'text',
    },
    {
        type: 'input',
        message: 'Please enter a text color',
        name: 'textcolor',
    },
    {
        type: 'list',
        message: 'Please choose a shape:',
        choices: ["Square","Circle","Triangle"],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'Please enter a color for the shape:',
        name: 'shapecolor',
    },
  
]
  
  module.exports = questions