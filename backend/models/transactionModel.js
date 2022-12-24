const mongoose = require("mongoose");

const schema = mongoose.Schema;

const transactionSchema = new schema({
  transactionId: {
    type: String,
    required: [true, "transaction Id is required"],
  },
  nft: {
    type: String,
    reuired: [true, "Nft hash is required"],
  },
  product: {
    type: schema.Types.ObjectId,
    required: [true, "product is required while doing transaction"],
    ref: "Product",
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  from: {
    type: schema.Types.ObjectId,
    ref: "User",
    required: [true, "from (user id) is required"],
  },
  to: {
    type: schema.Types.ObjectId,
    ref: "User",
    required: [true, "to (user id) is required"],
  },
  amount: {
    type: Number,
  },
});

module.exports = mongoose.model("Transaction", transactionSchema);
