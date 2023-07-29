const express = require("express");
const app = express();
const Route = require("./route");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/", Route);

module.exports = app;
