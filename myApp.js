require('dotenv').config()

let express = require('express');
let app = express();

// ********** Your code starts here **********
// Root-level middleware that logs every request
app.use((req, res, next) => {
  // Build the log message in the format: "METHOD path - ip"
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  // Pass control to the next middleware function
  next();
});


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
  console.log("MESSAGE_STYLE:", process.env.MESSAGE_STYLE);
  // Set the base message
  let message = "Hello json";
  // Read the environment variable MESSAGE_STYLE each time the route is hit
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }
  
  // Respond with the JSON object
  res.json({ "message": message });
});

app.get('/now',function(req, res, next) {
  req.time = Date().toString();  // this will be the time of the request
  next();
}, function(req, res) {
  res.json(req.user);
});
// ********** Your code ends here **********




































 module.exports = app;
