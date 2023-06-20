//Callbacks
// Blocking Code Example
//This Program Executes in Sequence

var fs = require("fs");
// var data = fs.readFileSync("ReplCommands.txt");

// console.log(data.toString());
// console.log("Program Ended");


//Non-Blocking Code Example
//This Program Executes Aschronously

// var fs = require("fs");
fs.readFile("ReplCommands.txt", (err, data) =>{
    if(err) console.error(err);
    console.log(data.toString())
})

console.log("Program Ended");
