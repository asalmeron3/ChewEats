var connection = require("./connection.js");

function getRestaurants(){
  connection.query("SELECT * FROM restaurants", function(err, results){
    if(err) {
      console.log(err);
    } else {
      console.log(results)
      return results;
    }
  });
}

const rests = getRestaurants();
console.log(rests);