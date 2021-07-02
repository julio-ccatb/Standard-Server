const Code = require("../libs/responses");
const { OrderItem } = require("../models/ColorItem.model");
const { Order } = require("../models/Order.model");

const Controller = {
  GetOrders: async (req, res) => {
    try {
      const orders = await Order.find({}).lean();
      return res.status(200).send(orders);
    } catch (err) {
      return res.status(500).send({ message: Code._500 });
    }
  },

  GetOrderBy: async (req, res) => {
    const { filter } = req.params;

    if (!filter || Number.isInteger(filter))
      return res.status(400).send({ message: Code._400 });

    try {
      const ordersFinded = await Order.find({ ordStatus: filter });

      return res.status(200).send({ message: Code._200, ordersFinded });
    } catch (err) {
      return res.status(500).send({ message: err, ordersFinded });
    }
  },

  PostOrder: async (req, res) => {
    const { worker_id } = req.params;
    const { fact, client, phone, email, color, note } = req.body;

    if (!fact || !client || !phone || !email || !color || !worker_id)
      return res.status(400).send({ message: Code._400 });

    let pre = {
      worker_id,
      fact,
      client,
      phone,
      email,
      note,
    };

    const order = new Order(pre);

    try {
      let orderSaved = await order.save();
      let colorItemsSaved = null;
      let colors = [];

      typeof color === "string" || color instanceof String
        ? colors.push(JSON.parse(color))
        : color.forEach((element) => {
            let JsonElement = JSON.parse(element);
            colors.push(JsonElement);
          });

      const isArr = colors.length >= 1;
      /**
       * Saving Color ITEMS
       */
      isArr
        ? (colorItemsSaved = await OrderItem.insertMany(colors, {
            ordered: true,
          }))
        : (colorItemsSaved = await new OrderItem(colors).save());

      if (orderSaved && colorItemsSaved) {
        isArr
          ? colorItemsSaved.forEach((coloritem) => {
              orderSaved.colors = orderSaved.colors.concat(coloritem._id);
            })
          : (orderSaved.colors = orderSaved.colors.concat(colorItemsSaved._id));

        const final_Order = await orderSaved.save();

        return res.status(201).send({ message: Code._201, final_Order });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: Code._500, err });
    }
  },
};

module.exports = Controller;
