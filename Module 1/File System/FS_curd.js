/*
1: Creating the folder
2: Creating File in the folder
3: Add more data into the file at the end of existing data.
4: Read the data without getting the buffer data at first.
5: file encoding
6: Rename the fike name
7: Delete the file or folder

CRUD :
Create
Read
Update
Delete

*/

const fs = require("fs");

//Creating the folder
// fs.mkdirSync("FsCurd");

//Creating the file
fs.writeFileSync("FsCurd/bio.txt", "My Name Is Sandeep Seeram");

//Reading the file in the folder
let data = fs.readFileSync("FsCurd/bio.txt")
console.log(data.toString());

//Updating the file in the folder
fs.appendFileSync("FsCurd/bio.txt", "\nI'm A Fullstack Developer");

//File encoding
data = fs.readFileSync("FsCurd/bio.txt", "utf-8")
console.log(data);

//Renaming the file
fs.renameSync("FsCurd/bio.txt", "FsCurd/MyBio.txt")


//Deleting The Folder Or File
fs.unlinkSync("FsCurd/MyBio.txt"); //Delete the file in the folder

fs.rmdirSync("FsCurd"); //Delete the folder

