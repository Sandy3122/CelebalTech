// fetching api
const fetch = require('node-fetch');
fetch('https://jsonplaceholder.typicode.com/todos?_limit=4') 
.then(res=>res.json())
.then(json=>console.log(json))  


// fetching specific file using map in json
const users = [{
    name:"Sandeep",
    age:"22"
},{
    name:"Seeram",
    age:"22"
}];
users.map((user=>console.log(user.name)));
