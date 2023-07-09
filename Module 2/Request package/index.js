const request = require("request");
const fs = require("fs");
const http = require("http");


const url =
  "https://api.weatherapi.com/v1/current.json?key=55d3aee711294a4f981172318232106&q=London&aqi=yes";

/* --- 1 ---  */
// request({url: url}, (err, res) => {
//     const data = JSON.parse(res.body);
//     console.log("Location Data :", data.location);
//     console.log("Current Data :", data.current);

// })


/* --- 2 ---  */
// Here we no need to use JSON.parse(), Now it directly converted into the JSON Object
// request({url: url, json:true}, (err, res) => {
//         const data = (res.body);
//         console.log("Location Data :","\n", data.location);
//         console.log("Current Data :","\n", data.current);

//     });


/* --- 3 ---  */
// request("http://www.google.com", function (error, response, body) {
//   console.error("error:", error); // Print the error if one occurred
//   console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
//   console.log("body:", body); // Print the HTML for the Google homepage.
// });

/*

pipe is used to pass the entire content of a readable stream to a writable stream.

*/

/* --- 4 ---  */
// Request emits a "response" event when a response is received.
// The response argument will be an instance of http.IncomingMessage.
// request.get("https://celebaltech.com/assets/img/celebal.webp")
//   .on('response', function(response) {
//     console.log(response.statusCode) // 200
//     console.log(response.headers['content-type']) // 'image/png'
//   })
//   .pipe(request.put('http://mysite.com/img.png'))


/* --- 5 ---  */
// To easily handle errors when streaming requests, listen to the error event before piping:
// request
//   .get('http://mysite.com/doodle.png')
//   .on('error', function(err) {
//     console.error(err)
//   })
//   .pipe(fs.createWriteStream('doodle.png'))


