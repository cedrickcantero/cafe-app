const mysql = require('mysql2');

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'cafe-mysql',
  user: 'root',
  password: 'password',
  database: 'cafe_database',
  port: "3306",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


// Export the connection pool
module.exports = pool.promise();
