// Set up MySQL connection
var mysql = require("mysql");

// Establish burgers_db database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db",
  use_env_variable: "JAWSDB_URL",
  dialect: "mysql"
});

// Make connection
connection.connect(function(err) {

    // Catch errors
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for ORM
module.exports = connection;
