let express = require('express');
let app = express();
require('dotenv').config()

// ********** Your code starts here **********

// This line serves static files from the "public" directory
app.use('/public', express.static(__dirname + '/public'));


// Use the app.get() method to serve "Hello Express" on the root path.
app.get('/', (req, res) => {
  console.log("Received GET request on '/'");
  res.sendFile(__dirname + '/views/index.html');
});

// Define a GET route for /json that responds with JSON
app.get('/json', (req, res) => {
  console.log("Received GET request on '/json'");
  // Set the base message
  let message = "Hello json";
  // Read the environment variable MESSAGE_STYLE each time the route is hit
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }
  
  // Respond with the JSON object
  res.json({ "message": message });
});
// ********** Your code ends here **********




































 module.exports = app;
