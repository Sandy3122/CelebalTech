const express = require("express");
const app = express();

app.get('/', (req,res) =>{
    res.sendFile(__dirname + "/chatBot.html")
})

const port = 8000
app.listen(port, () => console.log(`Server Started, http://localhost:${port}`))