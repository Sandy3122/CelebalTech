const express = require("express");

const app = express();

//Embeded Javascript Engines
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log("Here");
    // res.sendStatus(500);         //Internal Server Error
    // res.status(500).send("<h1>Internal Server Error<h1/>");
    // res.status(200).send("<h1>Server Started Successfullyr<h1/>");
    // res.send("<h1>Hello World<h1/>")

    // res.download('index.js')     //It will download the index.js file

    res.render('index', {text : "Index.ejs"});
})

app.listen(8000, () => console.log("Server Started") )