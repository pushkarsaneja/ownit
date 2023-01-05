const jwt = require("jsonwebtoken");
exports.sendToken = (user, req, res, statusCode, id) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SEC, {
    expiresIn: process.env.JWT_EXPIRESIN,
  });

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  return res.status(statusCode).cookie("token", token, options).json({
    success: true,
    name: user.name,
    role: user.role,
    id: id,
  });
};
