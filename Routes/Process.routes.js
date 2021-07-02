const { Router } = require("express");
const {
  PostOrder,
  GetOrders,
  GetOrderBy,
} = require("../Controllers/ProcessController");
const { VerifyToken } = require("../libs/jwt");
const Process_Router = Router();

//METHODS

//GET
Process_Router.get("/Process/Order/", GetOrders);
Process_Router.get("/Process/Order/:filter", GetOrderBy);

//POST

Process_Router.post("/Process/Order/:worker_id", PostOrder);

//PATCH
//DELETE

module.exports = Process_Router;
