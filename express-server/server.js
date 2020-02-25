// Get dependencies
let express = require('express');
let path = require('path');
let http = require('http');
let bodyParser = require('body-parser');

// Get our API routes
let api = require('./routes/api');

let app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Cross Origin middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  });

// Set our api routes
app.use('/', api);


// _Get port from environment and store in Express.

let port = process.env.PORT || '3000';
app.set('port', port);

// _Create HTTP server._
let server = http.createServer(app);

/*
 _ Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));