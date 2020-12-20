var path = require("path");

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

    // Basic route that sends the user to index.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));  
    });

    // Route to note taking page
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));  
    });
};