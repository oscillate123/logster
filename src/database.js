// get the config
import config from './config.js'

// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: config.db.host,
  user: config.db.user,
  database: "information_schema", // config.db.database,
  password: config.db.password
});

// execute will internally call prepare and query
connection.execute(
    'SELECT host FROM information_schema.processlist',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
  
      // If you execute same statement again, it will be picked from a LRU cache
      // which will save query preparation time and give better performance
    }
  );