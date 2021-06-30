const mongoose = require("mongoose");

var db_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@portfoliocluster.d1g9w.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(db_URL, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("open", () => {
  console.log(`✅ Database connected and ready`);
});
