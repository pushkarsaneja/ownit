const mongoose = require("mongoose");
const validator = require("validator");

const schema = mongoose.Schema;

const userSchema = new schema({
  name: {
    type: String,
    required: [true, "enter your name"],
    maxLength: [30, "cannot exceed 30 characters"],
    minLength: [4, "name should have more than 4 characters"],
  },
  email: {
    type: String,
    required: [true, "enter your Email ID"],
    unique: true,
    validate: [validator.isEmail, "enter a valid Email"],
  },
  password: {
    type: String,
    required: [true, "enter your password"],
    minLength: [5, "password should be 5 charaters long"],
    select: false,
  },
  role: {
    type: String,
    default: "consumer",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPassword: String,
  resetPasswordExpire: Date,
});

module.exports = mongoose.model("User", userSchema);
