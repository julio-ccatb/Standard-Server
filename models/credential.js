const mongoose = require("mongoose");

var CredentialSchema = new mongoose.Schema({
  name: String,
  user: String,
  password: String,
  rol: Number,
});

var Credential = mongoose.model("credential", CredentialSchema);

module.exports.Credential = Credential;
