/*
In Node.js, the util module provides various utility functions and features
to assist in debugging, formatting, and working with JavaScript objects. 

It offers a set of commonly used functions that can simplify development and enhance code readability.

The util module is built-in and does not require any additional installation or external dependencies.
*/


const util = require('util');

console.log(util); // { log: [Function], format: [Function] }

//Formated String
/*
util.format(format[, ...args]): Returns a formatted string using the specified format string and arguments.
It supports placeholders 
%s for strings, 
%d for numbers, 
%j for JSON, and 
%o for objects.
*/

const name = 'Sandeep Seeram';
const age = 22;
const message = util.format('My name is %s and I am %d years old.', name, age);
console.log("Formated String : ", message); // Output: My name is John and I am 30 years old.


//Inspect Javascript Objects
/*
util.inspect(object[, options]): Returns a string representation of the object,
useful for debugging and logging.
It provides a customizable way to inspect and display JavaScript objects.
*/

const obj = { name: 'Seeram Sandeep', age: 22 };
console.log(util.inspect(obj)); // Output: { name: 'John', age: 30 }


//util.promisify(original)
/*
util.promisify(original): 
Converts a function that uses callbacks into a function that returns a promise.
It simplifies working with asynchronous functions by allowing us to use promises and async/await syntax.
*/

const fs = require("fs")

const readFile = util.promisify(fs.readFile);

readFile('ReplCommands.txt', 'UTF-8')
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

