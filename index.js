require("dotenv").config();
require("./libs/mongoose");
const app = require("./app");

var server = app.listen(process.env.PORT || 3000, () =>
  console.log(
    `✅ Server running on port: ${process.env.PORT ? process.env.PORT : 3000}`
  )
);
