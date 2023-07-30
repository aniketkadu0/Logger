const Database = require("./Database");
const Cryptr = require("cryptr");
const cryptr = new Cryptr("baby");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

exports.addlog = async (req, res, next) => {
  var mysql = require("mysql");

  var connection = mysql.createConnection({
    host: cryptr.decrypt(process.env.HOST),
    user: cryptr.decrypt(process.env.USER),
    password: cryptr.decrypt(process.env.PASSWORD),
    database: cryptr.decrypt(process.env.DATABASE),
  });

  await connection.connect((err) => {
    if (err) throw err;
    console.log("MySQL connected");
  });

  await Database.ExecuteSQL(req, connection);

  connection.end();

  return await res.status(200).send({ message: "Successfully logged" });
};
