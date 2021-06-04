const express = require("express");

const authorization = require("../middlewares/requiredAuth");
const Track = require("../models/Track");

const router = express.Router();
router.use(authorization);
router.get("/tracks", async (req, res) => {
  const { user } = req;

  const tracks = await Track.find({ userId: user._id });
  res.send(tracks);
});

router.post("/tracks", async (req, res) => {
  const { name, locations } = req.body;
  if (!name || !locations)
    return res
      .status(402)
      .send({ error: "You Must Provide Name and Location" });
  try {
    const track = new Track({ name, locations, userId: req.user._id });
    await track.save();
    return res.send(track);
  } catch (error) {
    return res.status(402).send({ error: error.message });
  }
});

module.exports = router;
