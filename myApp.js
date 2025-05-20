let express = require('express');
let app = express();

// ********** Your code starts here **********

// Use the app.get() method to serve "Hello Express" on the root path.
app.get('/', (req, res) => {
  console.log("Received GET request on '/'");
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/public', express.static(__dirname + '/public'));

// ********** Your code ends here **********




































 module.exports = app;
