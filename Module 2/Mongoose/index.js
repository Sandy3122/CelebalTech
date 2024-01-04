const express = require("express")
const app = express()           //Creating Instance
const MensRanking = require("./models/schema")
require('./db/connection')      //Importing MongoDB Connection
require("./models/schema")      //Importing Schema

//Middlewares
app.use(express.json())



//Get Request
app.get("/", (req, res) => {
    res.send("Hello World");
})


//Post Request
app.post("/mens", async (req, res) => {
    try{
        const mensRecord = new MensRanking(req.body)
        console.log(req.body)

        const insertingData = await mensRecord.save();
        res.send(insertingData);
    }
    catch(err) {
        res.send(err)
    }
})



const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server Started With Port: ${port}`)
})