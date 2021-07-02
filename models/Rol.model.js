const { Schema, model } = require("mongoose");

var RolSchema = new Schema({
  _id: Number,
  name: String,
});

var Rol = model("rol", RolSchema);

module.exports.Rol = Rol;
