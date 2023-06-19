/*
What is JSON?
JavaScript Object Notation, or JSON, is a lightweight data format that has become the defacto standard for the web.
JSON can be represented as either a list of values, 
e.g. an Array, or a hash of properties and values, e.g. an Object.



JSON.stringify() => Converts Object Data to JSON Data

JSON.parse() => Converts JSON Data to Object Data
*/


const bioData = {
    name : "Sandeep Seeram",
    age : 22,
    Branch : "Mechical",
    Domain : "Full Stack"
};

// console.log(bioData);

//Object to JSON Data
const objectToJSON = JSON.stringify(bioData);       //objectToJSON holds Json Data
// console.log(objectToJSON);                          //Json Data

//JSON to Object
const jsonToObject = JSON.parse(objectToJSON)       //jsonTOObject holds object data
// console.log(jsonToObject)


const fs = require('fs');

fs.writeFile("json.json", objectToJSON, (err) => {
    if(err) throw err;
    console.log("Folder Created And Data Inserted")
})


fs.readFile("json.json", "UTF-8", (err, data) => {
    if(err) throw err;
    console.log(`JSON Data : ${data}`);

    const orgData = JSON.parse(data)
    console.log("Original Data : " , orgData);

})