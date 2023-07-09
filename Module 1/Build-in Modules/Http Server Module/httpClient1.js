/*
HTTP Client:

An HTTP client initiates requests to an HTTP server in order to retrieve information or perform actions.
It sends HTTP requests to the server, specifying the desired method (e.g., GET, POST, PUT, DELETE), URL, headers, and optionally includes a request body.
The client waits for the server to process the request and sends back an HTTP response.
The client receives and consumes the response, which may include data or information from the server.
Examples of HTTP clients include web browsers, command-line tools like cURL or HTTPie, or client libraries used in applications to interact with remote servers.

*/

const http = require("http");

const options = {
    hostname : "jsonplaceholder.typicode.com",
    path     : "/users?_limit=4",
    method   : "GET"
};

const clientRequest = http.request(options, (res) => {
    let data = ""

    res.on("data" , (chunkData) => data += chunkData)


    res.on("end", () => console.log(data));


});

//Handling Errors, When occured during the request.
clientRequest.on("err", (err) => console.log(err))


/*

Inside the callback function, event listeners are attached to the response object (res). 
The 'data' event is triggered whenever a chunk of data is received. 
The chunks are concatenated into the data variable. The 'end' event is triggered 
when all data has been received, and then the accumulated data is logged to the console.

*/

clientRequest.end();