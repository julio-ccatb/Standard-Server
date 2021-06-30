var express = require("express");
var cors = require("cors");
var app = express();

//Loads rute files

const Auth_Router = require("./Routes/Auth");
//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
//CORS

//Rutes

//ADD ROUTE ARRYS HERE
app.use("/api", [Auth_Router]);

//Exports

module.exports = app;
