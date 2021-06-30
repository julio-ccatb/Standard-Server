const { sign, verify } = require("jsonwebtoken");
const Code = require("./responses");
const KEY = process.env.PAYLOAD;

const Controller = {
  GetToken: async (data) => {
    try {
      let token = sign(data, KEY);
      return token;
    } catch (err) {
      throw { "Get Token Fail": err };
    }
  },

  VerifyToken: (req, res, next) => {
    try {
      const { authorization } = req.headers;

      if (!authorization) res.status(401).send(Code._401);

      const token = authorization.split(" ")[1];
      req.token = token;

      next();
    } catch (err) {
      return res.status(500).send({ message: Code._500 });
    }
  },

  ValidateToken: (token) => {
    try {
      const decoded = verify(token, KEY);
      return decoded ? decoded._id : false;
    } catch (err) {
      return false;
    }
  },
};

module.exports = Controller;
