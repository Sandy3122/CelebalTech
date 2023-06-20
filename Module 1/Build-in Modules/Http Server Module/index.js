var http = require('http');

const server = http.createServer((req,res) => {
    //console.log(req.url)
    if(req.url === "/") {
        res.write(`<h1> Hello From the Home Slide<h1/>`);
        res.end();
    }
    else if(req.url === "/about"){
        res.write(`<h1> Hello From About Us Slide<h1/>`)
        res.end()
    }else if(req.url === "/contact"){
        res.write(`<h1> Hello From Contact Slide<h1/>`)
        res.end()
    }else{
        res.writeHead(404, {"Content-type" : "text/html"})
        res.write(`<h1>Page Not Found<h1/>`);
        res.end()
    }
});

server.listen(8080, () => console.log("Server Started With 8080 Port"))