// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information.
// ===============================================================================
var fs = require("fs");
var path = require("path");
var http = require("http");
var notesJS = require("../db/db");

// var server = http.createServer(handleRequest);

//routing
module.exports = function(app) {
    
    //api GET requests
    app.get("/api/notes", function(req, res) {
        fs.readFile(path.join(__dirname, "../db/db.json"), function (err, data){
            if (err) {
                res.writeHead(500, { "Content-Type": "text/html" });
                res.end("<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>");
              }
              else {
                // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
                // an html file.
                data = JSON.parse(data);
                // console.log(typeof data);
                // console.log(data[0].title);
                // res.writeHead(200, { "Content-Type": "json" });
                // res.end(data);
                
                res.json(data);
                return data;
              }
        });
       
      });

      //api POST requests
      app.post("/api/notes", function(req, res) {
        // get new entry
        console.log("this is " + req.body);
        // push new value to JSON
        //   notesJS.push(req.body);
        //   res.json(false);
        
      });
};