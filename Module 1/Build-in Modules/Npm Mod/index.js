/*
In Node.js, npm (Node Package Manager) is the default package manager that comes bundled with the Node.js runtime.
It is a command-line tool that allows developers to discover, install, and manage dependencies for their Node.js projects.

npm provides access to a vast ecosystem of open-source packages and modules that can be easily integrated into Node.js applications.
It simplifies the process of managing dependencies and facilitates code reuse
by providing a centralized repository for sharing and distributing Node.js packages.

*/

const chalk = require("chalk");

console.log(chalk.blue('Hello world!'));
console.log(chalk.green.bgMagenta.bold('Hello world!'));
console.log(chalk.blue.underline.inverse('Hello world!'));


const validator = require("validator")

let res = validator.isEmail("sandeep@gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));


res = validator.isEmail("sandeepgmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
