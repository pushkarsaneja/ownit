const { default: mongoose } = require("mongoose");
const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");

exports.addAddress = async (req, res, next) => {
  const { address } = req.body;
  if (!address) return next(new ErrorHandler("No Address", 401));
  try {
    const user = await User.findById(req.user.id);
    const old = user.address;
    let newData = [];
    if (old) newData = [...old, address];
    else newData = [address];
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.user.id },
      {
        $set: { address: newData },
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      success: true,
      address: updatedUser.address,
    });
  } catch (err) {
    next(new ErrorHandler(err, 400));
  }
};

exports.updateAddress = async (req, res, next) => {
  const { updatedAddress, addressId } = req.body;
  try {
    const user = await User.updateOne(
      { _id: req.user.id, "address._id": addressId },
      {
        $set: {
          "candidates.$.addressLine": updatedAddress.addressLine,
          "candidates.$.country": updatedAddress.country,
          "candidates.$.state": updatedAddress.state,
          "candidates.$.pincode": updatedAddress.pincode,
        },
      }
    );
    res.status(201).json({
      success: true,
      message: "Address Updated",
    });
  } catch (err) {
    return next(new ErrorHandler(err));
  }
};

exports.getAllAddress = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.user.id }, "address");
    res.status(200).json({
      success: true,
      addresses: user.address,
    });
  } catch (err) {
    return next(new ErrorHandler(err));
  }
};

exports.updatePersonalInfo = async (req, res, next) => {
  try {
    const { personalInfo } = req.body;
    const user = await User.findOneAndUpdate(
      { _id: req.user.id },
      { ...personalInfo },
      {
        new: true,
      }
    );
    res.status(201).json({
      success: true,
      personalInfo: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        _id: user._id,
      },
    });
  } catch (err) {
    return next(new ErrorHandler(err));
  }
};

exports.getPersonalInfo = async (req, res, next) => {
  try {
    const user = await User.find(
      { _id: req.user.id },
      "name email phone profile createdAt id"
    );

    res.status(200).json({
      success: true,
      user: user[0],
    });
  } catch (err) {
    return next(new ErrorHandler(err));
  }
};

exports.getSearchUserInfo = async (req, res, next) => {
  try {
    const { searchText } = req.body;
    const user = await User.find(
      {
        $or: [
          {
            email: searchText,
          },
        ],
      },
      "name email _id profile"
    );
    res.status(200).json({
      success: true,
      user: user[0],
    });
  } catch (err) {
    return next(new ErrorHandler(err));
  }
};

exports.deleteSingleAddress = async (req, res, next) => {
  const { id } = req.body;
  if (!id) return next(new ErrorHandler("No address Id to delete", 404));
  try {
    const user = await User.findOneAndUpdate(
      {
        _id: req.user.id,
      },
      {
        $pull: {
          address: {
            _id: id,
          },
        },
      },
      {
        safe: true,
        multi: true,
        new: true,
      }
    );
    res.status(200).json({
      success: true,
      addresses: user.address,
    });
  } catch (err) {
    return next(new ErrorHandler(err));
  }
};

exports.getUserTransactions = async (req, res, next) => {
  try {
    const sort = req.query.sort === "asc" ? 1 : -1;
    const search = req.query.search;

    const user = await User.findById(req.user.id)
      .select("name transactions")
      .populate({
        path: "transactions",
        select: "-_id",
        options: {
          sort: {
            timestamp: sort,
          },
        },
        populate: [
          { path: "to", select: "name id" },
          { path: "from", select: "name id" },
          {
            path: "product",
            select: "title images",
          },
        ],
      })
      .sort({ "transactions.timestamp": sort });

    let transactions = user.transactions.filter(
      (item) => item.product.title.search(search) >= 0
    );
    user.transactions = transactions;
    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    return next(new ErrorHandler(err));
  }
};

exports.getUserOwnerships = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id)
      .select("name allAssests")
      .populate({
        path: "allAssests",
      });

    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    return next(new ErrorHandler(err));
  }
};

// testing
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().select("_id name email ");
    res.status(201).json({
      success: true,
      users,
    });
  } catch (error) {
    return next(new ErrorHandler(error));
  }
};
