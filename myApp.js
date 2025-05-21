require('dotenv').config()

let express = require('express');
let app = express();
let bodyParser = require('body-parser');

// ********** Your code starts here **********
app.use(bodyParser.urlencoded({ extended: false }));
 // Parse URL-encoded bodies

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
  req.time = Date().toString();  //first function will add a property to the request object
  next();
}, function(req, res) {
  res.json({ time: req.time }); // second function will use the property added by the first function
});

// Using route parameters to create a route that responds with the word "word" in the URL
// the route parameter is defined with a colon (:) before the parameter name
//for example, here the route parameter is "word"
// The route will respond with a JSON object containing the word
app.get('/:word/echo', (req, res) => {
  const word = req.params.word; // Extract the word from the URL
  res.json({echo: word}); // Respond with the word in a JSON object
});

app.post('/name', (req, res) => {
  res.json({ name: `${req.body.first} ${req.body.last}` });
});


// ********** Your code ends here **********

 module.exports = app;
