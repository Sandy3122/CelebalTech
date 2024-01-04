/* 
Promises
*/


// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const randomNum = Math.random();
//         if (randomNum > 0.5){
//             resolve(randomNum)
//         }
//         reject(new Error('Reject : Random Number is too small'))
//     }, 2000);
// });


// myPromise.then(res => {
//     console.log(`Success: ${res}`);
// }).catch(err => {
//     console.error(`${err}`);
// })



/*
Callbacks
*/

// function fetchData(Callback) {
//     setTimeout(()=>{
//         const error = null;     //Set to an error object to get an error
//         const data = {name : "Sandeep", Age : 22};
//         // console.log("Inside Fetch");
//         Callback(error, data)
        
// }, 2000);
// }

// fetchData((error, data) => {
//     error ? console.error("Error", error) : console.log("Data :", data )
// })


//  Nested CallBacks

// function step1(callback) {
//     setTimeout(() => {
//       console.log("Step 1 complete");
//       callback();
//     }, 1000);
//   }
  
//   function step2(callback) {
//     setTimeout(() => {
//       console.log("Step 2 complete");
//       callback();
//     }, 800);
//   }
  
//   function step3(callback) {
//     setTimeout(() => {
//       console.log("Step 3 complete");
//       callback();
//     }, 1200);
//   }
  
//   step1(() => {
//     step2(() => {
//       step3(() => {
//         console.log("All steps completed");
//       });
//     });
//   });

/*
Tricky Question
*/

// for(var i = 0; i < 3; i++){
//     setTimeout(() => {
//         console.log(`Hello ${i}`);
//     }, 1000);
// }

//  declaring with 'var' means it creates i with function scope so it logs 3 every time 
// to solve this it should declare with  'let' because it it creates i with block scope and then i will iterate with 0, 1, 2
//  Console 
// Hello 3
// Hello 3
// Hello 3

/*
File System
*/

const { log } = require('console');
const fs = require('fs')

// // Creating the Folder
// fs.mkdir("Filesystem", (err)=>{
//     if(err) throw err;
//     console.log("Folder Created")
// });


// // Craete the file
// fs.writeFile('./Filesystem/sample.txt', 'My name is Sandeep', (err) => {
//     if(err) throw err;
//     console.log("File has been created")
// })

// //  Append the data
// fs.appendFile('./Filesystem/sample.txt', "\nI'm Fullstack Developer", (err) => {
//     if(err) throw err;
//     console.log("Data has been inserted");
// });

// //  Read the file without buffer data
// fs.readFile('./Filesystem/sample.txt', 'UTF-8', (err, data)=>{
//     if(err) throw err;
//     console.log(data);
// });


// //  Rename the file
// fs.rename('./Filesystem/sample.txt', './Filesystem/bio.txt', (err)=>{
//     if(err) throw err;
//     console.log('File Has Been Renamed');
// })


/*
http Module
*/

// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(`${req} ${res}`);
//     if(req.url === '/'){
//         res.write(`<h1>Hello From The Home Page</h1>`);
//         res.end();
//     }else if(req.url === '/about'){
//         res.write(`<h1>Hello From The About Page</h1>`);
//         res.end();
//     }else if(req.url === '/contact'){
//         res.write(`<h1>Hello From The COntact Page</h1>`);
//         res.end();
//     }else{
//         res.writeHead(404, {"Content-type" : "text/html"})
//         res.write(`<h1>Page Not Found</h1>`);
//         res.end();
//     }
// });


// server.listen(8000, () => console.log("Server Started With Port 8000"))




/*
Fetch APi
*/

// const fetch = require('node-fetch');

// fetch('https://jsonplaceholder.typicode.com/todos?_limit=4')
// .then(res => res.json())
// .then(data => console.log(data))

// // fetching specific file using map in json
// const users = [{
//     name:"Sandeep",
//     age:"22"
// },{
//     name:"Seeram",
//     age:"22"
// }];

// users.map((user => console.log(user.name)))


// const  mongoose = require("mongoose");

// const uri = "";

// mongoose.connect(uri, {
//     useNewUrlParser: true ,
//     useUnifiedTopology: true
// }).then(() => console.log("connected Successfully"))
// .catch((err) => console.log(`Error Connecting : ${err}`))

//  Get Input From User

// const readline = require('readline');
// const input = readline.createInterface({
//     input: process.stdin,
//     output:process.stdout
// });

// //  Ask a question and get user Input 
// input.question("What is your name ?", (name) => {
//     console.log(`My Name Is ${name}`)
//     // input.close()
// })


/*
Implement a function that finds the index of a specific element in an array. If the element is not found, the function should return -1. 
*/

// function findElementIndex(arr, element){
//     const index = arr.indexOf(element);

//     return index !== -1 ? index : -1
// }

// console.log(findElementIndex([1,2,3,4,5,6], -1))


/*
Implement a function that merges two arrays into a single array, alternating elements from each array. 
*/

// function mergedArrays(arr1, arr2){
//     const mergedArray = [];
//     const maxLength = Math.max(arr1.length, arr2.length);

//     for(let i = 0; i < maxLength; i++){
//         if(i < arr1.length) mergedArray.push(arr1[i]);
//         if(i < arr2.length) mergedArray.push(arr2[i]);

//     }
//         return mergedArray
// }

// console.log(mergedArrays([1,2,3,4,5], [5,6,7,8,9]))

/*
Write a function that finds the second largest number in an array. 
*/

// For second smallest [ arr.sort((a,b) => a - b); ]

// const findSecondLargest = (arr) => {
//     arr.sort((a,b) => b - a);
//     console.log(arr);
//     return arr[1]
// }

// numbers = [1,9,7,6,5,4,3,8,10,2]

// console.log(findSecondLargest(numbers))


/*
Check if it is prime or not
*/

// function isPrime(number) {
//     if (number <= 1) {
//       return false;
//     }
  
//     for (let i = 2; i * i <= number; i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
  
//     return true;
//   }
  
  
//   // Test the function
//   const testNumbers = [2, 7, 10, 17, 21, 29];
//   testNumbers.forEach(number => {
//     console.log(`${number} is prime: ${isPrime(number)}`);
//   });


/*
Plaindrome Or Not
*/

function isPalindrome(number) {
  const numStr = number.toString();
  const reversedStr = numStr.split('').reverse().join('');
  return numStr === reversedStr;
}

// Test the function
console.log(isPalindrome(121));   // Output: true
console.log(isPalindrome(12321)); // Output: true
console.log(isPalindrome(12345)); // Output: false
