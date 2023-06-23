//Callbacks
// Blocking Code Example
//This Program Executes in Sequence

// var fs = require("fs");
// var data = fs.readFileSync("ReplCommands.txt");

// console.log(data.toString());
// console.log("Program Ended");


//Non-Blocking Code Example
//This Program Executes Aschronously
/*
1. Callbacks are functions that are passed as arguments to other functions and are executed once a particular operation completes. 
2. Callbacks allows us to handle the result or response of an asynchronous operation.


*/

//Example 1
var fs = require("fs");
fs.readFile("ReplCommands.txt", (err, data) =>{     //readFile is an asynchronous function
    if(err) console.error(err);
    console.log(data.toString())
})

console.log("Program Ended");



