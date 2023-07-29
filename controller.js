const Database = require("./Database");
const Cryptr = require("cryptr");
const cryptr = new Cryptr("baby");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: cryptr.decrypt(process.env.HOST),
  user: cryptr.decrypt(process.env.USER),
  password: cryptr.decrypt(process.env.PASSWORD),
  database: cryptr.decrypt(process.env.DATABASE),
});

connection.connect((err) => {
  if (err) console.log(err);
  console.log("MySQL connected");
});

exports.addlog = async (req, res, next) => {
  Database.ExecuteSQL(req, connection);
  // connection.end();
  return res.status(200).send({ message: "Successfully logged" });
};
