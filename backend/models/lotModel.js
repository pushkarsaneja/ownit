const mongoose = require("mongoose");
const schema = mongoose.Schema;

const lotSchema = new schema({
  products: [
    {
      type: schema.Types.ObjectId,
      ref: "product",
    },
  ],
  categories: [
    {
      type: String,
    },
  ],

  info: {
    type: String,
  },
  name: {
    // product name
    type: String,
    required: [true, "lot name is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Lot", lotSchema);
