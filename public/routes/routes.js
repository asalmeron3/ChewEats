var connection = require("../../config/connection.js");
module.exports = function(app) {
  app.get("/api", function(req, res){
    connection.query("SELECT * FROM restaurants", function(err, results){
      if(err) {
        console.log(err);
      } else {
        console.log(results)
        return res.json(results);
      }
    });
  })
}
