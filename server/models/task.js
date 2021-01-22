const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
  },
  todo: {
    type: String,
  },
  isCompleted: {
    type: String,
  },
  dateOfCompletion: {
    type: String,
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
  groupId: {
    type: Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("Tasks", taskSchema);
