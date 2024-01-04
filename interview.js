// // const express = require('express');

// // const app = express();

// // app.get('/', (req, res) => {
// //     res.send("Hello World")
// // })

// // app.get('/hello', (req, res) => {
// //     res.send("<h1>Sandeep Seeram</h1>");
// // })

// // const Port = 8000;
// // app.listen(Port, () => {
// //     console.log(`Server Started @ http://localhost:${Port}`)
// // })

// function fetchData(callback) {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // callback(null, "Data fetched!");
//         resolve("Data Fetched");
//         }, 1500);
//     });

// }

// async function fetchDataAsync(){
//   try{
//     console.log("fetchning Data");
//     const data= await fetchData()
//     console.log(`Data : ${data}`);
//   }catch(error){
//     console.error(`Error : ${error}`)
//   }
// }

// fetchDataAsync()

// In Abother Of Handling Promises
// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           const data = "Hello World";
//           data ? resolve(data) : reject("Data Not Found")
//       }, 2000);
//   });
// };

// fetchData()
//   .then(data => console.log(data)) // Hello, world!)
//   .catch(error => console.log(error)) // Data not available




// Regular Promise-based function
//  here the fetchData function will return promise
// function fetchData() {
//   return fetch('https://api.example.com/data')
//     .then(response => response.json())    // .then() method is chained to the fetch and it takes the callback func that processess the response using .json()  
//     .then(data => console.log(data))      // the callback function will returns the parsed JSON data 
//     .catch(error => console.log(`Error Message ${error}`))    // If it has any error it log's to the console
// }

// // Equivalent async/await function
// async function fetchDataAsync() {
//   // here we are using await keyword and it is used to pause execution until the response .json() promise is resolved
//   const response = await fetch('https://api.example.com/data');
//   //  here we are converting the response into json and storing in jsonData
//   const jsonData = await response.json();
//   // And finally we are returning jsonData as response
//   return jsonData;  
// }


/*
async/await function
Error Handling
*/
// Import the 'node-fetch' built-in module
// const fetch = require('node-fetch');

// // Define an asynchronous function named 'getData'
// async function getData() {
//   try {
//     // Use the fetch function to make an HTTP GET request to the provided URL
//     const response = await fetch('http://jsonplaceholder.typicode.com/users/1');
    
//     // Check if the response is not OK;, it will throw an error
//     if (!response.ok) {
//       throw new Error('Request failed');
//     }
//     // Convert the response body to JSON format
//     const data = await response.json();

//     // Return the JSON data
//     return data;
//   } catch (error) {
//     // Handle any errors that occur during the fetching or processing the url
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// }

// // Call the 'getData' function to handle the result using .then() and .catch()
// getData()
//   .then(data => {       // the keyword will handle the success response
//     console.log(data); // Log the retrieved data to the console
//   })
//   .catch(error => {   // Here the catch keyword will handle the error
//     console.error('Error:', error); // or Log any errors to the console
//   });

