let mysql = require("mysql2");
let dotenv = require("dotenv");
dotenv.config();

var connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

connection.connect(function(err) {
  if(err) {
    console.log("Error connecting to Cheweats database: " + err.stack);
    return;
  } else {
    console.log("Connection to Cheweats database successful: " + connection.threadId);
  }
});

module.exports = connection;