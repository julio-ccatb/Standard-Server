const { Schema, model } = require("mongoose");

var OrderSchema = new Schema({
  fact: { type: String, default: "" },
  date_emi: { type: Date, default: Date.now() },
  client: { type: String, default: "" },
  phone: { type: String, default: "" },
  email: { type: String, default: "" },
  ordStatus: { type: Number, default: 0 },
  note: { type: String, default: "" },
  worker_id: { type: String, default: "" },
  colors: [
    {
      type: Schema.Types.ObjectId,
      ref: "OrderItem",
    },
  ],
});

var Order = model("order", OrderSchema);

module.exports.Order = Order;

// [
//     {
//       colorName: "rojo",
//       quality: "SGP",
//       spec: "SG",
//       quantity: 1,
//       card: "popular",
//       img: "",
//     },
//     {
//       colorName: "Blanco",
//       quality: "SGP",
//       spec: "SG",
//       quantity: 4,
//       card: "popular",
//       img: "",
//     },
//     {
//       colorName: "azul",
//       quality: "SGP",
//       spec: "SG",
//       quantity: 12,
//       card: "popular",
//       img: "",
//     },
//   ]
