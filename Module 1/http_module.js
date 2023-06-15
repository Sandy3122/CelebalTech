var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Contet-Type' : 'text/html'});
    res.write('Hello World');
    res.end();
}).listen(8000);
console.log("Server Has Been Started")