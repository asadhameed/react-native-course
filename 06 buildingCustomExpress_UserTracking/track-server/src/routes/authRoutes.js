const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();
const SECRET_KEY = "my_secret_key";

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const user = new User({ email, password });
  try {
    const singUpUser = await user.save();
    const token = jwt.sign({ userId: singUpUser._id }, SECRET_KEY);
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: err.message });
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    res.status(422).send({ error: "Must Provide email and password" });
  const user = await User.findOne({ email });
  if (!user) res.status(422).send({ error: "Invalid email or password" });
  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, SECRET_KEY);
    res.send({ token });
  } catch (err) {
    res.status(422).send({ error: "Invalid email or password" });
  }
});

module.exports = router;
