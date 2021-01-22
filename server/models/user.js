const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  name: {
    type: String,
  },
  dob: {
    type: String,
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Users", userSchema);
