const { Schema, model } = require("mongoose");

var OrderItemSchema = new Schema({
  date_accepted: { type: Date },
  date_finished: { type: Date },
  pint_id: { type: String, default: "" },
  colorName: { type: String },
  quality: { type: String },
  spec: { type: String },
  quantity: { type: Number },
  card: { type: String },
  img: { type: String, default: "" },
  status: { type: Number, default: 0 },
});

var OrderItem = model("OrderItem", OrderItemSchema);

module.exports.OrderItem = OrderItem;
