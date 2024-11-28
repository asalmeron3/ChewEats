var connection = require("../../config/connection.js");
module.exports = function(app) {
  app.get("/api/restaurants", function(req, res){
    connection.query(selectAll("restaurants"), function(err, results){
      if(err) {
        return res.json("Error with /api/restaurants :"+ err);
      } else {
        return res.json(results);
      }
    });
  });

  app.get("/api/menu-items/:restId?", function(req, res){
    connection.query(selectAll("menu_items") + " WHERE restaurant_id ="  + req.params.restId, function(err, results){
      if(err) {
        return res.json("Error with /api/menu-items :"+ err);
      } else {
        return res.json(results);
      };
    });
  });

  app.get("/api/customers", function(req, res){
    connection.query(selectAll("customers"), function(err, results){
      if(err) {
        return res.json("Error with /api/customers"+ err);
      } else {
        return res.json(results);
      };
    });
  });
};

function selectAll(tableName){
  return ("SELECT * FROM " + tableName);
}