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



/*

we require the prompt-sync library and create an instance of it by calling require('prompt-sync')(). 
The prompt function returned by prompt-sync is then used to get user input by passing a prompt message as a string.


*****
prompt-sync is a synchronous method, meaning it will block the execution of your code until the user enters input.
This is different from the asynchronous approach commonly used in Node.js.
*/


// const prompt = require('prompt-sync')();

// // Prompt the user for input
// const firstName = prompt('Enter First Name : ');
// const lastName = prompt('Enter Last Name : ');
// const Domain =  prompt('Enter Your Domain Name : ')
// // Display the user's input
// console.log(`Hello, My Name Is "${firstName} ${lastName}", And I'm A ${Domain}`);


