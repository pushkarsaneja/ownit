const Transaction = require("../models/transactionModel");
const User = require("../models/userModel");
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const crypto = require("crypto");

exports.createTransaction = async (req, res, next) => {
  const randomId = crypto.randomBytes(16).toString("hex");

  try {
    const { productId, to, amount } = req.body;

    if (!productId || !to) {
      return next(
        new ErrorHandler("Incomplete data for making transaction", 401)
      );
    }
    const product = await Product.findById({ _id: productId });
    if (!product) return next(new ErrorHandler("No such product exists", 404));
    const from = req.user._id;
    const toUser = await User.findOne({ email: to });
    // if current user is not current owner return;
    if (product.currentOwner.toString() !== from.toString()) {
      return next(
        new ErrorHandler("You are not the current Owner of the product", 405)
      );
    }

    const transaction = await Transaction.create({
      transactionId: randomId,
      nft: randomId,
      product: productId,
      from,
      to: toUser._id,
      amount,
    });

    // adding transaction in user object

    const sender = await User.findOneAndUpdate(
      { _id: from },
      {
        $push: {
          transactions: transaction._id,
        },
        $pull: { currentAssests: productId },
      }
    );

    const reciever = await User.findOneAndUpdate(
      { _id: toUser._id },
      {
        $push: {
          transactions: transaction._id,
          currentAssests: productId,
          allAssests: productId,
        },
      }
    );
    // update currentConsumer of the product and ownerships array
    await Product.findOneAndUpdate(
      { _id: productId },
      {
        $set: {
          currentOwner: toUser._id,
        },
        $push: {
          ownerships: {
            user: toUser._id,
            date: Date.now(),
          },
        },
      }
    );

    res.status(201).json({
      success: true,
      transaction,
    });
  } catch (err) {
    return next(new ErrorHandler(err, 400));
  }
};

exports.getSingleTransaction = async (req, res, next) => {
  try {
    const transId = req.params.id;
    const transaction = await Transaction.findOne({ transactionId: transId })
      .populate({ path: "product" })
      .populate({ path: "from" })
      .populate({ path: "to" });
    res.status(201).json({
      success: true,
      transaction,
    });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
};
