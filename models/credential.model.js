const { Schema, model } = require("mongoose");

var CredentialSchema = new Schema({
  name: String,
  user: String,
  password: String,
  rol: {
    type: Schema.Types.ObjectId,
    ref: "rol",
  },
});

var Credential = model("credential", CredentialSchema);

module.exports.Credential = Credential;
