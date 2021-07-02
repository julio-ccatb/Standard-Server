const Code = require("../libs/responses");
const { Rol } = require("../models/Rol.model");

const Controller = {
  UpdateRoles: async (req, res) => {
    let roles = [
      { _id: 1, name: "Administrator" },
      { _id: 2, name: "Programmer" },
      { _id: 3, name: "Cashier" },
      { _id: 4, name: "Painter" },
      { _id: 5, name: "Client" },
    ];

    let toSave = roles.map((rol) => {
      return new Rol(rol);
    });

    try {
      let deleted = await Rol.deleteMany({});

      if (deleted) {
        const rolesSaved = await Rol.insertMany(toSave, { ordered: true });
        return res.status(201).send({ message: Code._201, rolesSaved });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: Code._500, err });
    }
  },
};

module.exports = Controller;
