// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information.
// ===============================================================================
var fs = require("fs");
var path = require("path");
var db = require("../db/db.json")



//routing
module.exports = function(app) {
    
    //api GET requests
    app.get("/api/notes", function(req, res) {
        console.log("you are in apiRoutes.js GET method");
        return JSON(db);
      });
    
    //api POST requests
    // app.post("/api/notes", function(req, res) {
    //   // get new entry
    //   console.log("this is " + req.body);
    //   // push new value to JSON
    //   // notesJS.push(req.body);
    //   // res.json(false);
      
    // });

    //api DELETE requests
//     app.post("/api/notes/:delete", function(req, res) {
//       // get current entries from file
//       // find index of desired record
//       // delete the index from the object
//       // display updated json object
//     });
};