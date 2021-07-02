const { Router } = require("express");
const {
  PostSignUp,
  PostLogIn,
  test,
} = require("../Controllers/AuthController");
const { VerifyToken } = require("../libs/jwt");
const Auth_Router = Router();

//METHODS

//GET
// Auth_Router.get('/test', VerifyToken, test);

//POST
Auth_Router.post("/auth/signup", PostSignUp);
Auth_Router.post("/auth/login", PostLogIn);

//PATCH
//DELETE

module.exports = Auth_Router;
