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
    type: String,
    required: [true, "Product Manufacture is required"],
  },
  images: [
    {
      image_url: {
        type: String,
        reqired: true,
      },
    },
  ],
  price: {
    type: Number,
    required: [true, "enter price of product"],
  },
  category: {
    type: String,
    required: [true, "Enter Product Category"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  createdBy: {
    type: schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
