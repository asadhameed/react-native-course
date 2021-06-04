require("./models/User");
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");
const app = express();
const PORT = 3000;
const MONGO_DB = "mongodb://localhost:27017/reactnative";

mongoose.connect(MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(express.json());
app.use(authRoutes);
app.use(trackRoutes);
mongoose.connection.on("open", () => {
  console.log("connected");
});

mongoose.connection.on("error", (err) => {
  console.log(`Mongoose don't connected ${err.message}`);
});
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
