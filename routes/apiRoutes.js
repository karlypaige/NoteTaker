// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information.
// ===============================================================================

var notesJS = require("../public/assets/js/index.js");
// var waitListData = require("../data/waitinglistData");

//routing
module.exports = function(app) {

    //api GET requests
    app.get("/api/notes", function(req, res) {
        res.json(notesJS);
        console.log("SUCCESS!! notesJS json complete");
      });
    
    //   app.get("/api/waitlist", function(req, res) {
    //     res.json(waitListData);
    //   });

      //api POST requests
    //   app.post("/api/notes", function(req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
        // if (tableData.length < 5) {
        //   notesJS.push(req.body);
        //   res.json(true);
        // }
        // else {
        //   waitListData.push(req.body);
        //   res.json(false);
        // }
    //   });
     
};