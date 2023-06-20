const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const multer = require("multer");

const uploadDir = path.join(__dirname, "uploads");

// Create the upload directory if it doesn't exist
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

app.use(express.static(__dirname + "/"));
app.use(bodyParser.urlencoded({ extended: true }));

// Configure multer to save uploads in the specified directory
const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/fileUpload", upload.single("file"), (req, res) => {
  console.log(req.file.originalname);
  console.log(req.file.path);
  console.log(req.file.mimetype);

  const response = {
    message: "File Uploaded Successfully",
    filename: req.file.originalname,
  };
  console.log(response);
  res.send(JSON.stringify(response));
});

const server = app.listen(8080, () => {
  const host = "localhost";
  const port = server.address().port;
  console.log(`Server Started With: http://${host}:${port}`);
});
