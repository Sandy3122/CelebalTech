const fs = require("fs");


//Creating The Folder
// fs.mkdir("FsCurd", (err) => {
//     if(err) throw err;
//     console.log("Folder Created")
// });


//Creating the file in the folder
fs.writeFile("./FsCurd/bio.txt", "My Name Is Seeram Sandeep", (err)=>{
    (err) => console.error(err) // Arrow Function
    console.log("File Created And Data Also Inserted");
})


//Appending the Data
fs.appendFile("./FsCurd/bio.txt", "\nI'm a Fullstack Developer", (err) =>{
    (err) => console.error(err)
    console.log("Data Has Been Appended In The File");
}); 


//Reading the file without buffer data
/*
UTF - Unicode Transformation Format.
UTF-8 is an encoding system for Unicode. 
It can translate any Unicode character to a matching unique binary string, 
and can also translate the binary string back to a Unicode character.
*/
fs.readFile("./FsCurd/bio.txt", "UTF-8", (err, data) => {
    if(err){
        console.error(err);
    }
    console.log(data);
});


//Rename the existing file
fs.rename("./FsCurd/bio.txt", "./FsCurd/MyBio.txt", (err) => {
    if(err) throw err;
    console.log("File Name Was renamed")
});


//Delete The file in the folder
// fs.unlink("./FsCurd/MyBio.txt", (err) => {
//     (err) => { throw err };
//     console.log("The MyBio.txt has been deleted successfully.");
// });


//Delete The Folder
// fs.rmdir("./FsCurd", (err) => {
//     (err) =>  {throw err};
//     console.log('Folder Deleted Successfully');
// })