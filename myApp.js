let express = require('express');
let app = express();

// ********** Your code starts here **********

// This line serves static files from the "public" directory
app.use('/public', express.static(__dirname + '/public'));


// Use the app.get() method to serve "Hello Express" on the root path.
app.get('/', (req, res) => {
  console.log("Received GET request on '/'");
  res.sendFile(__dirname + '/views/index.html');
});

// ********** Your code ends here **********




































 module.exports = app;
