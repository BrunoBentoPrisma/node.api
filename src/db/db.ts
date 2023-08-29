const mysql = require("mysql2/promise");

const connection = mysql.createConnection({
  host: "31.220.108.126",
  user: "root",
  password: "BmLC9621@?",
  port: 33060,
  database: "BellaRosa24",
});

module.exports = connection;