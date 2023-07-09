const mongoose = require("mongoose");

/*
"useCreateIndex" allows dynamic index creation during query execution,
"useNewUrlParser" enables the new connection string parser,
"useUnifiedTopology" enables the new server discovery and monitoring engine.

These options are used in the MongoDB Node.js driver to enhance functionality and ensure compatibility with newer MongoDB versions.

*/
mongoose.connect("mongodb://localhost:27017/CelebalPractice", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Database"); // successful message when connected successfully with db
  })
  .catch((err) => console.log(`Not Connected To MongoDB : ${err}`));
