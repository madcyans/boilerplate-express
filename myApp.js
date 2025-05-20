let express = require('express');
let app = express();

console.log("Hello, World!");

// ********** Your code starts here **********

// Use the app.get() method to serve "Hello Express" on the root path.
app.get('/', (req, res) => {
  console.log("Received GET request on '/'");
  res.send("Hello Express");
});

// ********** Your code ends here **********




































 module.exports = app;
