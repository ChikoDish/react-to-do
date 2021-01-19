const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
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

module.exports = mongoose.model("Tasks", taskSchema);
