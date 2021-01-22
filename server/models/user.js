const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
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

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.generateHash = function (password) {
  return bcrypt.hash(password, 10, null);
};

module.exports = mongoose.model("Users", userSchema);
