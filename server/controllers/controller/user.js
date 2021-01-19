const express = require("express"),
  router = express.Router();

const User = require("../../models/user");

router.post("/signup", async (req, res) => {
  console.log(req.body);
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

module.exports = router;
