// Dependencies
// =============================================================
var express = require("express");
var http = require('http');


//Express configuration
var app = express();
//initial port
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

// http.createServer(function(req,res){ // creates a server
//   res.writeHead(200,{'Content-type':'text/plain'}); //Specifies that the respones "hello" is a text
//   res.end("hello"); //shows the text "hello" on th eweb page
// }).listen(port); // attaches this server to the port no.