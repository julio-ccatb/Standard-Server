const { Schema, model } = require("mongoose");

var LabRecepieSchema = new Schema({
  ordItem_id: String,
  date_dispatch: { type: Date, default: Date.now() },
  R: {
    type: Number,
    min: [0, "rgb range is 0 - 255"],
    max: [255, "rgb range is 0 - 255"],
  },
  G: {
    type: Number,
    min: [0, "rgb range is 0 - 255"],
    max: [255, "rgb range is 0 - 255"],
  },
  B: {
    type: Number,
    min: [0, "rgb range is 0 - 255"],
    max: [255, "rgb range is 0 - 255"],
  },
  brightness: { type: Number },
  bases: [
    {
      quality: { type: String, default: "" },
      base: { type: String, default: "" },
      quantity: { type: String, default: "" },
    },
  ],
  colorants: [
    {
      colorant: { type: String, default: "" },
      quantity: { type: String, default: "" },
    },
  ],
  note: { type: String, default: "" },
});

var LabRecepie = model("LabRecepie", LabRecepieSchema);

module.exports.LabRecepie = LabRecepie;
