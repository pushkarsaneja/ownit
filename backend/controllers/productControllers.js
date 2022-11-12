const ErrorHandler = require("../utils/errorHandler");

exports.postProduct = async (req, res, next) => {
  try {
    const { title, price, category, description, images } = req.body;
    if (!title || !price || !category || !description)
      return next(new ErrorHandler("Insufficient Data", 401));

    const product = await Product.create({
      ...req.body,
      createdBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
};
