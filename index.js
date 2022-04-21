const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'What is your project called?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is does your program do?',
    },
    {
      type: 'input',
      name: 'instructions',
      message: 'How do you use this program?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install the program, and its dependencies?',
    },
    {
       type: 'input',
       name: 'issues',
       message: 'How do you report issues?',
    },
    {
       type: 'input',
       name: 'contribute',
       message: 'How do you want contributions to be made?',
    },
    
  ])
  .then((data) => {
    // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
    const filename = "output/README.md";
    const mdString = 
`# ${data.projectName}
## Description

${data.description}


## Instructions

${data.instructions}


## Installation

${data.installation}


## Reporting issues

${data.issues}


## Contributions

${data.contribute}`

    fs.writeFile(filename, mdString, (err) =>
      err ? console.log(err) : console.log('Successfully created the file!')
    );
  });
