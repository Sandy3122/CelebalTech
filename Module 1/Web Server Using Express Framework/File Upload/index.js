const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const multer = require("multer");

app.use(express.static(__dirname + "/"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer({ dest: "/tmp/" }).single("file"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/fileUpload", (req, res) => {
  console.log(req.file.originalname);
  console.log(req.file.path);
  console.log(req.file.mimetype);

  const file = __dirname + "/" + req.file.originalname;

  fs.readFile(req.file.path, (err, data) => {
    if (err) {
      throw err;
    } else {
      fs.writeFile(file, data, (err) => {
        if (err) {
          throw err;
        } else {
          const response = {
            message: "File Uploaded Successfully",
            filename: req.file.originalname,
          };
          console.log(response);
          res.send(JSON.stringify(response));
        }
      });
    }
  });
});

const server = app.listen(8080, () => {
  const host = "localhost";
  const port = server.address().port;
  console.log(`Server Started With: http://${host}:${port}`);
});
