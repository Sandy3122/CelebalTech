//Callbacks
/*
We Pass the in a function as an argunment - a callback that gets called when that task completed.
The callback has a argument that tells you wheather the operation completed successfully.
Asynchronous is all about callbacks
*/



const fs = require("fs");


// fs.writeFile("read.txt", "Today is an awesome day :) ", (err) => {
//     if(err) {
//         console.error(err)
//     }
//     console.log("File is created");
// });

//Appned the data
// fs.appendFile("read.txt", "\nLet's we will learn more concepts", (err) =>{
//     if(err) { console.error(err)}
//     console.log("Task Completed")
// })

fs.readFile("read.txt", "UTF-8", (err, data) => {
    if(err) { console.error(err)}
    console.log(data);
});


