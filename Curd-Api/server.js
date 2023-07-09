const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');
const app = express();

//Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
dotenv.config();

//Importing Routes
const userRoutes = require("./server/routes/userRoutes")

//Route Middlewares
app.use("/api/users", userRoutes);

app.get('/', (req, res) => {
  res.send("Hello Node API")
});

//Handling Requests For Non-Existing Endpoints
app.use((req, res, next) => {
  res.status(404).send({ message: "Hey! Please double-check the API endpoint." });
});

//MongoDB Connection

mongoose.set("strictQuery", false)
mongoose.connect(process.env.MongoDB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
  .then(() => {
    console.log("Successfully Connected To MongoDB Database.");
  })
  .catch((error) => {
    console.log(`Not Connected To MongoDB Database; Error : ${error}`);
  });


const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server Satrted @ http://localhost:${port}`)
});



// app.listen(PORT, () => console.log(`${PORT} server @ http://localhost:4000`))