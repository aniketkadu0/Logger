const Database = require("./Database");
const Cryptr = require("cryptr");
const cryptr = new Cryptr("baby");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
console.log("in controller");
var mysql = require("mysql");
console.log("after mysql");
var connection = mysql.createConnection({
  host: cryptr.decrypt(process.env.HOST),
  user: cryptr.decrypt(process.env.USER),
  password: cryptr.decrypt(process.env.PASSWORD),
  database: cryptr.decrypt(process.env.DATABASE),
});
console.log("after connection");
connection.connect((err) => {
  if (err) console.log(err);
  console.log("MySQL connected");
});
console.log("after connected");
exports.addlog = async (req, res, next) => {
  if (Database.ExecuteSQL(req, connection))
    return res.status(200).send({ message: "Successfully logged" });
};
