const mysql = require("mysql");
var connection;
const util = require("util");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mr.Wills123!!",
  database: "burgers_db"
});

connection.connect(function (err) {
  if (err) throw err;
});

connection.query = util.promisify(connection.query);
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "hacktheplanet",
    database: "todoagain_db"
  });
}

connection.connect();
module.exports = connection;
