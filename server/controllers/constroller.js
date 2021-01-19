var express = require("express"),
  router = express.Router();

router.use("/", require("./controller/user"));
module.exports = router;
