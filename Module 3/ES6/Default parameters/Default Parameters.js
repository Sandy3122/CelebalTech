/*
Default Parameters: ES6 introduced the ability to define default values for function parameters.

If a parameter is not provided, the default value is used instead.

*/

const greet = (name = 'Guest') => {
    console.log(`Hello, ${name}!`);
  };
  
greet(); // Hello, Guest!
greet('John'); // Hello, John!
  