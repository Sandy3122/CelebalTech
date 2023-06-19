/*
In Node.js, the path module provides utilities for working with file and directory paths.
It offers a set of functions to manipulate and handle file paths
in a platform-independent manner, making it easier to work with file systems across different operating systems.
*/

const path = require("path");

console.log()
//Directory Name
console.log(`Directory Path : ${path.dirname('S:/Programs/Node.js/Module 1/Path Module/index.js')}`)


//Extension Name
console.log(`Extension Name : ${path.extname('S:/Programs/Node.js/Module 1/Path Module/index.js')}`)


//Base Name
console.log(`Base Name : ${path.basename('S:/Programs/Node.js/Module 1/Path Module/index.js')}`)


//path.parse() will Parses a path into an object with root, dir, base, name, and ext properties.
console.log('Path Parse : ')
const myPath = path.parse('S:/Programs/Node.js/Module 1/Path Module/index.js')
console.log(myPath)

console.log(`Root Name : ${myPath.root}`)
console.log(`Path Name : ${myPath.name}`)

//path.resolve() Resolves a sequence of paths or path segments into an absolute path.
// It resolves the given paths relative to the current working directory.
const absolutePath = path.resolve('Path Module', 'index.js');
console.log(`Absolute Path : ${absolutePath}`);


//path.join() oins multiple path segments into a single path, using the platform-specific separator.
// This function takes any number of path segments as arguments and returns the concatenated path.
const fullPath = path.join('S:/Programs/Node.js/Module 1/Path Module', 'index.js.txt');
console.log(`Full Path : ${fullPath}`);