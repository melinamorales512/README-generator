// TODO: Include packages needed for this application

const fs = require('fs'); 
const inquirer = require('inquirer'); 
const { type } = require('os');

// TODO: Create an array of questions for user input

const questions = () => {

return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your complete name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your complete name!');
                return false; 
            }
        } 
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address',
      validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter your email address!');
            return false; 
        }
    } 
},

    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("please enter your GitHub Username");
          return false;
        }
        }
      },
    

    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("please enter the title of your project")
          return false;

        }
        }
      
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter your project description',
      validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter description!');
            return false; 
        } 
      }

    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter instructions for instalation',
      validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter instruction for instalation!');
            return false; 
        }
    } 
    },
    {
     type:'input',
     name: 'usage',
     message: 'Enter instructions for usage',
     validate: nameInput => {
      if (nameInput) {
          return true;
      } else {
          console.log('Please enter instructions for usage!');
          return false; 
      }
  } 
},
{
    type:'input',
       name: 'License',
       message: 'Enter license name',
       validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter license name!');
            return false; 
        }
    } 
  },
  {
  type:'input',
     name: 'Contributing',
     message: 'Contributors should read the installation section.',
     validate: nameInput => {
      if (nameInput) {
          return true;
      } else {
          console.log('Contributions are welcome');
          return false; 
      }
  } 

},
{
  type:'input',
     name: 'tests',
     message: 'npm test',
     validate: nameInput => {
      if (nameInput) {
          return true;
      } else {
          console.log('nmp test');
          return false; 
      }
  } 

},
{
  type:'input',
     name: 'Questions',
     message: 'Any questions about this projects, you can send me an email melinamorales@gmail.com',
     validate: nameInput => {
      if (nameInput) {
          return true;
      } else {
          console.log('Questions?');
          return false; 
      }
  } 

},
{
  type:'input',
     name: 'Credits',
     message: 'Credits for this projects',
     validate: nameInput => {
      if (nameInput) {
          return true;
      } else {
          console.log('Credits');
          return false; 
      }
  } 

},


]);
};

// TODO: Create a function to write README file

const generatePage = require("./util/generateMarkdown.js");

//function writeToFile(fileName, data) {}

const writeFile = data => {
  fs.writeFile('README.md', data, err => {
      // if there is an error 
      if (err) {
          console.log(err);
          return;
      // when the README has been created 
      } else {
          console.log("Your README has been successfully created!")
      }
  })
}; 
// function call to initialize program
questions()
// getting user answers 
.then(answers => {
    return generatePage(answers);
})
// using data to display on page 
.then(data => {
    return writeFile(data);
})
// catching errors 
.catch(err => {
    console.log(err)
})
