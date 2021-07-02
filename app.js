var express = require("express");
var cors = require("cors");
var app = express();

//Loads rute files

const Auth_Router = require("./Routes/Auth.routes");
const Admin_Router = require("./Routes/Admin.routes");
const Process_Router = require("./Routes/Process.routes");
//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
//CORS

//Rutes

//ADD ROUTE ARRYS HERE
app.use("/api", [Auth_Router, Admin_Router, Process_Router]);

//Exports

module.exports = app;
