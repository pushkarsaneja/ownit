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
  currentOwner: {
    type: schema.Types.ObjectId,
    ref: "User",
  },
  ownerships: [
    {
      _id: false,
      user: {
        type: schema.Types.ObjectId,
        ref: "User",
      },
      date: {
        type: Date,
        required: [true, "Ownership acquisition date is required"],
      },
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
  stolen: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productSchema);
