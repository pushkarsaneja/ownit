const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const { sendToken } = require("../utils/jwtToken");

// Register User
exports.registerUser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
      return next(new ErrorHandler("Invalid Name or Email or Password", 401));
    }
    const user = await User.create({
      name,
      email,
      password,
      role,
    });
    sendToken(user, req, res, 200);
  } catch (error) {
    return next(new ErrorHandler(error, 400));

    // res.status(400).json({
    //   success: false,
    //   message: error.message,
    // });
  }
};

//sign in
exports.signInUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return next(new ErrorHandler("Invalid Email", 401));
    }
    if (!password) {
      return next(new ErrorHandler("Invalid Password", 401));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorHandler("Invalid Email or Password", 401));
    }
    const isPasswordMatch = user.password === password;
    if (!isPasswordMatch) {
      return next(new ErrorHandler("Invalid Email or Password", 401));
    }

    sendToken(user, req, res, 200);
  } catch (error) {
    return next(new ErrorHandler(err, 400));
  }
};

// logout
exports.logout = (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logout Succesful",
  });
};
