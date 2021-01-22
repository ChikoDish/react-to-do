const express = require("express"),
  router = express.Router(),
  Bcrypt = require("bcryptjs");

const User = require("../../models/user");
router.post("/signup", async (req, res) => {
  const newUser = new User(req.body);
  newUser.password = Bcrypt.hashSync(req.body.password, 10);
  //newUser.password = newUser.generateHash(req.body.password);
  const user = await User.findOne({ email: req.body.email }).exec();

  if (user) {
    res.status(500).json({ message: "User already exist" });
    return;
  } else {
    await newUser.save();
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
