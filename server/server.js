const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require("cors");
var app = express();

app.use(cors());
const port = 5000;
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/react-todo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/", require("./controllers/constroller"));
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  app.listen(port, () => {
    console.log(`magic happes at port ${port}`);
  });
});
