/*
// Session And Tokens

Sure! Here are the differences between session-based authentication and token-based authentication in simple words and points:

Session-Based Authentication:
1. The server creates a session for the user upon successful login.
2. The session is typically stored on the server and associated with the user's session ID.
3. The session ID is sent to the client (usually through a cookie) and included in subsequent requests to identify the session.
4. The server validates the session ID with each request to ensure the user is authenticated.
5. Sessions are often managed and maintained on the server-side, requiring server resources to store session data.
6. Logout usually involves destroying the session on the server, requiring explicit server-side action.

Token-Based Authentication:
1. Upon successful login, the server generates a unique token for the user.
2. The token is typically a string of characters and is sent to the client, which stores it (e.g., in local storage or a cookie).
3. The client includes the token in subsequent requests, usually in the request headers (e.g., Authorization header).
4. The server verifies the token's validity and authenticity with each request, usually by checking a digital signature or decoding the token.
5. Tokens are often self-contained and store user authentication information, reducing the need for server-side storage and database lookups.
6. Logout generally involves deleting the token on the client-side, as tokens are typically stateless and managed on the client.

In summary, session-based authentication relies on server-side sessions and session IDs,
while token-based authentication uses tokens that are generated and managed by the server and stored on the client.
Tokens are self-contained, reducing the need for server-side storage and allowing for stateless authentication.

*/

//To generate Random Value
// const crypto = require("crypto");
// const randomString = crypto.randomBytes(32).toString('hex');
// console.log(`RANDOM_STRING : ${randomString}`);

const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path")
const session = require("express-session");
const bodyParser = require("body-parser")
var mongoose = require("mongoose");
const mongodbSession = require("connect-mongodb-session")(session);
const userModel = require("./models/User")
const bcrypt = require("bcrypt")



// Serve static files from the build directory
app.use(express.static(path.join(__dirname, 'views')));

//To accept the form data
app.use(express.urlencoded({extended: true}))

//ejs
app.set('view engine', "ejs");

//Set up default mongoose connection
var mongoUri = "mongodb://localhost:27017/sessions";
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).catch((err) => console.error(`Not Connected To MongoDB : ${err}`))
.then(() => console.log("MongoDB Connected Successfully"))

// Initialize the Express application and create a MongoDB session store:
const store = new mongodbSession({
    uri: mongoUri,
    collection: 'mySessions'
});

app.use(session({
    secret: process.env.SESSION_SECRET, //This key that will sign cookie
    saveUninitialized: false, //Create new Session even if not modified
    resave: false, //Resaving of data every time or not?
    proxy: true, // Trust the proxy
    store : store,//Use Mongodb Store as our storage mechanism
    name: "sessionId", //Name to use in Cookie Header/Session ID Name
}));

//Session Checker
const isAuth = (req, res, next) => {
    if(req.session.isAuth){
        next()
    }else{
        res.redirect("/login")
    }

} 

app.get("/sessions", (req, res) => {
    // Increment visit count in session
    req.session.visitCount = req.session.visitCount ? req.session.visitCount + 1 : 1;
    req.session.isAuth = true;
    console.log(req.session);
    console.log(req.session.id);
    res.send(`Welcome! You have visited this page ${req.session.visitCount} times.`);
});


app.get("/", (req, res) => {
    req.session.isAuth ? res.redirect("/home") : res.render("landing")
})

app.get("/login", (req, res) => {
    if(req.session.isAuth){
        return res.redirect('/home')
    }
    else{
       return res.render('login');
        }
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await userModel.findOne({ email });
  
      if (!user) {
        return res.status(404).send(`User Not Found <a href="/login">Go Back To LogIn Page</a>`);
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(401).send(`Password Did Not Match! <a href="/login">Go Back To LogIn Page</a>`);
      }
  
      req.session.isAuth = true;
      return res.redirect("/home");
    } catch (err) {
      // Handle error here...
      console.error("Error occurred during Login:", err);
      // Handle the error appropriately, such as redirecting to an error page or displaying an error message to the user.
      return res.status(500).send(`Internal Server Error, <a href="/login">Go Back To LogIn Page</a>`);
    }
  });
  
  

app.get("/signup", (req, res) => {
    if(req.session.isAuth){
        return res.redirect('/home')
    }
    else{
        return res.render("signup")
    }
})

app.post("/signup", async(req, res) => {
    const {username, email, password} = req.body;

    let user = await userModel.findOne({email});

    if(user){
        // alert('Email already exists!');
        console.log("User with this email already exists")
        return res.redirect("/home")
    }

    try{
    const hashedPassword = await bcrypt.hash(password, 10);

    let newUser = new userModel({
        username,
        email,
        password: hashedPassword,
    })

    await newUser.save();
    // res.status(200).send("User registered successfully");
    res.redirect("/login")
    }
    catch(err){
        //handle error here...
        console.error("Error occurred during password hashing:", err);
        // Handle the error appropriately, such as redirecting to an error page or displaying an error message to the user.
        res.status(500).send(`Internal Server Error,  <a href="/signup">Go Back To Signup Page</a>`);
        // res.redirect("/signup")
    }
})

app.get("/home", isAuth, (req, res) => {
    res.render("home");
})

app.post("/logout", (req,res) => {
    req.session.destroy((err) => {
        if(!err){
            res.clearCookie('sessionId');
            // res.json({"message": "Logout successfull!" });
            res.send(`Logout Successfully, <a href="/">Go Back To Landing Page</a>`)
            }
        else{
            console.log(err);
            res.status(400).json({'msg': 'Failed to logout'});
        }
    });
});


const port = process.env.PORT || 8000;
app.listen(port, () =>
    console.log(`Server running at http://localhost:${port}`)
);
