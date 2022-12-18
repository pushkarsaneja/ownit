const mongoose = require("mongoose");

const schema = mongoose.Schema;

const productSchema = new schema({
  title: {
    type: String,
    required: [true, "Enter Product Title"],
  },
  description: {
    type: String,
    required: [true, "Enter Product Description"],
  },
  manufacturer: {
    type: schema.Types.ObjectId,
    ref: "User",
    required: [true, "Product Manufacture is required"],
  },
  currentConsumer: {
    type: schema.Types.ObjectId,
    ref: "User",
  },
  ownerships: [
    {
      type: schema.Types.ObjectId,
      ref: "User",
    },
  ],
  images: [
    {
      type: String,
    },
  ],
  price: {
    type: Number,
    required: [true, "enter price of product"],
  },
  categories: [
    {
      type: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productSchema);
