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
      "name email phone profile createdAt"
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
