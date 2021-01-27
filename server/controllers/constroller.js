var express = require("express"),
  router = express.Router();

router.use("/", require("./controller/user"));
router.use("/todo", require("./controller/task"));
module.exports = router;
