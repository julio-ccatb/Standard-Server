const { hash, compare } = require("bcrypt");
const { GetToken, ValidateToken } = require("../libs/jwt");
const Code = require("../libs/responses");
const { Credential } = require("../models/credential");

const Controller = {
  PostSignUp: async (req, res) => {
    try {
      const { name, user, password, rol } = req.body;

      if (!name || !user || !password || !rol)
        return res.status(400).send({ message: Code._400 });

      const conflict = await Credential.findOne({ user: user }).lean();
      console.log(conflict);
      if (conflict) return res.status(409).send({ message: Code._409 });

      const hashed = await hash(password, 10);
      const credentials = new Credential({ name, user, password: hashed, rol });
      let credentialSaved = await credentials.save();

      if (!credentialSaved) throw "Document Not saved";

      return res.status(201).send({ message: Code._201 });
    } catch (err) {
      return res.status(500).send({ message: Code._500, err });
    }
  },

  PostLogIn: async (req, res) => {
    try {
      const { user, password } = req.body;
      if (!user || !password)
        return res.status(400).send({ message: Code._400 });

      const userFinded = await Credential.findOne({ user }).lean();
      const validPass = await compare(password, userFinded.password);

      if (!validPass) return res.status(401).send(Code._401);

      let token = await GetToken(userFinded);

      return res.status(200).send({ token });
    } catch (err) {
      return res.status(500).send({ message: Code._500, err });
    }
  },

  test: async (req, res) => {
    const { token } = req;
    const isValid = ValidateToken(token);

    if (!isValid) return res.status(401).send({ message: Code._401 });

    return res.status(200).send({ isValid });
  },
};

module.exports = Controller;
