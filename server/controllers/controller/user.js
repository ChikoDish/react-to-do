const express = require("express"),
  router = express.Router();

const User = require("../../models/user");

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email }).exec();
  if (user) {
    res.status(500).json({ message: "User already exist" });
    return;
  } else {
    await User.create({ name, email, password });
    res.json({ success: true });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).exec();

  if (!!user && user.password !== password) {
    res.status(403).json({ message: "Invalid credentials" });
    return;
  } else {
    res.json({ message: user });
  }
});

module.exports = router;
