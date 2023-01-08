const Transaction = require("../models/transactionModel");
const User = require("../models/userModel");
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const crypto = require("crypto");

const createTransaction = (pid, from, to, amount) => {
  return new Promise(async (resolve, reject) => {
    const randomId = crypto.randomBytes(16).toString("hex");
    try {
      if (!pid || !to || !from) {
        return reject({
          message: "Incomplete data for making transaction",
          id: pid,
        });
      }
      const product = await Product.findById({ _id: pid });
      if (!product)
        return reject({ message: "No such product exists", id: pid });

      // const from = req.user._id;
      const toUser = await User.findOne({ email: to });

      if (from._id.toString() === toUser._id.toString()) {
        return reject({
          message: "cannot transfer product to sender itself",
          id: pid,
          img: product.images[0],
          title: product.title,
        });
      }

      // if current user is not current owner return;
      if (product.currentOwner.toString() !== from.toString()) {
        return reject({
          message: "You are not the current Owner of the product",
          id: pid,
          img: product.images[0],
          title: product.title,
        });
      }

      const transaction = await Transaction.create({
        transactionId: randomId,
        nft: null,
        product: pid,
        from,
        to: toUser._id,
        amount,
      });

      // adding transaction in user object
      await User.findOneAndUpdate(
        { _id: from },
        {
          $push: {
            transactions: transaction._id,
          },
          $pull: { currentAssests: pid },
        }
      );

      await User.findOneAndUpdate(
        { _id: toUser._id },
        {
          $push: {
            transactions: transaction._id,
            currentAssests: pid,
            allAssests: pid,
          },
        }
      );
      // update currentConsumer of the product and ownerships array
      await Product.findOneAndUpdate(
        { _id: pid },
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

      return resolve({ id: pid });
    } catch (err) {
      return reject({
        message: err,
        id: pid,
      });
    }
  });
};

exports.createTransactions = async (req, res, next) => {
  try {
    const { products, to, amount = null } = req.body;

    if (!products || products.length === 0 || !to) {
      return next(
        new ErrorHandler("Incomplete data for making transaction", 401)
      );
    }

    var promises = [];
    products.forEach((pid) => {
      var promise = createTransaction(pid, req.user._id, to, amount);
      promises.push(promise);
    });

    Promise.allSettled(promises).then((data) => {
      let errors = [];
      data.map((item) => {
        if (item.status === "rejected") {
          errors.push(item.reason);
        }
      });
      res.status(200).json({
        success: true,
        errors: errors,
      });
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
