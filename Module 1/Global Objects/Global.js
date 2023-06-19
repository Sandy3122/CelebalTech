//Global
/*
The global object represents the global namespace in Node.js. 
It provides a way to access global variables and functions from any module. 

Any variable or function declared without using the "var", "let", or "const" keywords becomes a property of the global object.

*/

global.customVariable = 'Hello, world!';
console.log(customVariable); // Output: Hello, world!