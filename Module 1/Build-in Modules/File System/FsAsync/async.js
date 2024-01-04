const fs = require("fs");

//Synchronous

// const data = fs.readFileSync("read.txt", "UTF-8");
// console.log(data);
// console.log("After The Data") //It will appear at the last in console


//Asynchronous
fs.readFile('read.txt', 'UTF-8' , (err, data) => {
    if(err) throw err;
    console.log(data);
});
console.log("After The Data"); //It will appear first in console
