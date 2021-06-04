const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const User = mongoose.model("User");
const SECRET_KEY = "my_secret_key";

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).send({ Error: "You must be logged In" });
  }

  const token = authorization.replace("Bearer ", "");
  try {
    const { userId } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(userId);
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).send({ Error: "You must be logged In" });
  }
};
