const User = require("../models/userModel");
const { sendToken } = require("../utils/jwtToken");

// Register User
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) throw Error("Invalid Data");
    const user = await User.create({
      name,
      email,
      password,
      role,
    });
    sendToken(user, req, res, 200);
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

//sign in user
exports.signInUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) throw new Error("Invalid email");
    if (!password) throw new Error("Invalid password");

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      throw new Error("Invalid Email or Password", 401);
    }
    const isPasswordMatch = user.password === password;
    if (!isPasswordMatch) {
      throw new Error("Invalid Email or Password");
    }

    sendToken(user, req, res, 200);

    // return res.status(200).json({ success: true });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

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
