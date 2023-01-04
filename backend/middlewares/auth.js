const ErrorHandler = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticatedUser = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return next(
        new ErrorHandler("Please Login to access this resource", 401)
      );
    }
    const decodedData = jwt.verify(token, process.env.JWT_SEC);
    req.user = await User.findById(decodedData.id);

    next();
  } catch (error) {
    return next(new ErrorHandler(error, 404));
  }
};

exports.AuthorizeRole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role.toLowerCase())) {
      return next(
        new ErrorHandler(`You is not allowed to access this resource`, 403)
      );
    }
    next();
  };
};
