import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

connection.connect();

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
