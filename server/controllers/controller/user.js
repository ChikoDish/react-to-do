const express = require("express"),
  router = express.Router(),
  Bcrypt = require("bcryptjs");

const User = require("../../models/user");
router.post("/signup", async (req, res) => {
  const newUser = new User(req.body);
  newUser.password = Bcrypt.hashSync(req.body.password, 10);
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
  if (!user) {
    res.status(400).send({ message: "email does not exist!" });
  } else if (!Bcrypt.compareSync(password, user.password)) {
    res.status(400).send({ message: "Invalid password" });
  } else {
    res.send({ message: user });
  }
});

module.exports = router;
