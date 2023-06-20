const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

//Making Path as absolute
app.use(express.static(__dirname + '/'))

//_dirname =  It gives you the path of the currently running file
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

//Getting the form data
app.get('/submit', (req,res)=>{
    response = {
        Name: req.query.Name,
        Age : req.query.Age,
        Hobbies: req.query.Hobbies
    };
    
    console.log("Data Received", response);
    res.send(JSON.stringify(response));
    
})


const server = app.listen(8000, () => {
    // var host = server.address().address;
    var host = "localhost";
    var port = server.address().port;
    console.log("Server Started with http://%s:%s",host, port)

});
console.log(__filename)