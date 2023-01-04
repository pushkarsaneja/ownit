const mongoose = require("mongoose");

const schema = mongoose.Schema;

const reportSchema = new schema({
  productId: {
    type: schema.Types.ObjectId,
    ref: "Product",
  },
  reportingDate: {
    type: Date,
    default: Date.now(),
  },
  images: [
    {
      type: String,
    },
  ],
  status: {
    type: String,
    default: "reported",
  },
  reportedUser: {
    type: schema.Types.ObjectId,
    ref: "User",
  },
  resolvedUser: {
    type: schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
  resolvedDate: {
    type: Date,
    default: null,
  },
  remarks: {
    type: String,
    default: null,
  },
  scanLocation: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("Report", reportSchema);
