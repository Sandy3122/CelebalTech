//CallBacaks 

// Asynchronous function that takes a callback
function readFileContents(filename, callback) {
    // Simulating a file read operation
    setTimeout(function () {
      var contents = "This is the content of the file.";
      callback(null, contents); // Pass null as the error and the file contents to the callback
    }, 2000);
  }
  
  // Callback function to handle the result
function handleFileContents(error, contents) {
    if (error) {
      console.error("Error reading file:", error);
    } else {
      console.log("File contents:", contents);
    }
  }
  
  // Usage: Call the asynchronous function with the callback
  readFileContents("example.txt", handleFileContents);
  