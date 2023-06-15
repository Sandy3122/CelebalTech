 /*
 Node.js core modules

Consider module to be the same as Javascript libraries. A set of function you want to include in your application

NOde.js has a set of built-in modukes which you can use without any further installation
*/

const name = "Sandeep Seeram";
console.log(name);


//File System
const fs = require("fs");

fs.writeFileSync('fs_text.txt', "Node.js Practice");
fs.writeFileSync('fs_text.txt', "Node.js Practice; From Scratch"); //This time it will overwrite the file

fs.appendFileSync('fs_text.txt', "Welcome To Node.js Practice"); //It will append the content in the file

const data = fs.readFileSync('fs_text.txt');

// console.log(data);
console.log(data.toString()); //It will logs the dat ain console

// to change the file name 
fs.renameSync("fs_text.txt", "readWrite.txt");

