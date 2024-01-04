const mongoose = require("mongoose");

// const mongoUri =  "mongodb+srv://Sandeep1999:Sandeep3122@sandeep.nlcna.mongodb.net/sessions?retryWrites=true&w=majority";
const mongoUri =  "mongodb://0.0.0.0:27017/sessions";

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Set a higher timeout value (e.g., 30 seconds)
    
}).then(() => console.log("MongoDB Connected Successfully"))
.catch((err) => console.error(`Not Connected To MongoDB : ${err}`));

module.exports = mongoose;
