// Create a readline interface
// Using Readline built-in module

// const readline = require('readline');
// const input = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Ask a question and get user input
// input.question('What Is Your Name ? ', (name) => {
//   console.log(`Hello, My Name Is ${name}!`);
//   input.close();
// });




const prompt = require('prompt-sync')();

// Prompt the user for input
const firstName = prompt('Enter First Name : ');
const Domain =  prompt('Enter Your Domain Name : ')
// Display the user's input
console.log(`Hello, My Name Is ${firstName} And I'm A ${Domain}`);

