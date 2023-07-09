/*
Query String

1. When working with HTTP requests, the query string is a part of the URL that contains key-value pairs separated by ampersands (&).
2. It is commonly used to pass data to the server from the client-side.
3. In Node.js, you can process and extract data from the query string using the built-in querystring module.

Below is an example

*/

const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  // Parse the query string from the URL
  const queryString = req.url.split('?')[1];
  const queryParams = querystring.parse(queryString);

  // Access the values from the query string
  const name = queryParams.name;
  const age = queryParams.age;

  // Respond with the extracted values
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Name: ${name}, Age: ${age}`);
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});


//http://localhost:3000/?name=Sandeep&age=22
/*
1. We create an HTTP server using the http module. When a request is received, we extract the query string from the URL 
2. req.url.split('?')[1]. We then pass the query string to querystring.parse() to convert it into an object where the keys are the parameter names and the values are the corresponding values.

3. To test this code, you can make an HTTP GET request to http://localhost:3000/?name=Sandeep&age=22

4. The server will extract the values from the query string and respond with Name: Sandeep, Age: 22.


*/