const mongoose = require("mongoose");
const validator = require("validator");

const schema = mongoose.Schema;

const userSchema = new schema({
  name: {
    type: String,
    required: [true, "enter your name"],
    maxLength: [30, "cannot exceed 30 characters"],
    minLength: [4, "name should have more than 3 characters"],
  },

  email: {
    type: String,
    required: [true, "enter your Email ID"],
    unique: true,
    validate: [validator.isEmail, "enter a valid Email"],
  },
  wallet: {
    type: "String",
  },
  profile: {
    type: String,
    default: null,
  },
  currentAssests: [
    {
      type: schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  allAssests: [
    {
      type: schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  password: {
    type: String,
    required: [true, "enter your password"],
    minLength: [5, "password should be 5 charaters long"],
    select: false,
  },
  phone: {
    type: String,
    minLength: [10, "Phone Number should be 10 charaters long"],
    maxLength: [10, "Phone Number should be 10 charaters long"],
  },
  role: {
    type: String,
    default: "consumer",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  address: [
    {
      addressLine: { type: String },
      country: { type: String },
      state: { type: String },
      pincode: { type: String },
      tag: { type: String },
    },
  ],
  transactions: [
    {
      type: schema.Types.ObjectId,
      ref: "Transaction",
    },
  ],
  resetPassword: String,
  resetPasswordExpire: Date,
});

module.exports = mongoose.model("User", userSchema);
