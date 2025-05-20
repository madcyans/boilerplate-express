let express = require('express');
let app = express();

// Define a route for GET requests to "/"
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen on port 3000
app.listen(PORT, () => console.log(`Node is listening on port ${PORT}...`));




































 module.exports = app;
