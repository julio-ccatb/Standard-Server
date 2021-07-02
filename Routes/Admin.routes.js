const { Router } = require("express");
const { UpdateRoles } = require("../Controllers/AdminController");
const { VerifyToken } = require("../libs/jwt");
const Admin_Router = Router();

//METHODS

//GET

//POST

Admin_Router.post("/Admin/roles", UpdateRoles);

//PATCH
//DELETE

module.exports = Admin_Router;
