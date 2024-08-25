const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost" || process.env.DB_HOST,
  user: "root" || process.env.DB_USER,
  password: "" || process.env.DB_PASSWORD,
  database: "blog_platform" || process.env.DB_NAME,
  connectTimeout: 10000, // 10 seconds timeout
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to the MySQL database.");
});

module.exports = connection;
