// const https = require('https');

// // Make an HTTP request

// const request = https.get('https://jsonplaceholder.typicode.com/users?_limit=2', (res) => {
//   if (res.statusCode !== 200) {
//     console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
//     res.resume();
//     return;
//   }


//   let data = '';

//   res.on('data', (chunk) => {
//     data += chunk;
//   });

//   res.on('close', () => {
//     console.log('Retrieved all data');
//     console.log(JSON.parse(data));
//   });
// });

// // Handle errors
// request.on('error', (err) => {
//     console.error(`Encountered an error trying to make a request: ${err.message}`);
//   });

// // Send the request
// request.end();



