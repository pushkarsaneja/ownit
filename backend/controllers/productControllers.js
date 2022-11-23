const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");

exports.postProduct = async (req, res, next) => {
  try {
    const { title, price, categories, description } = req.body;
    if (
      !title ||
      !price ||
      !categories ||
      categories.length === 0 ||
      !description
    )
      return next(new ErrorHandler("Insufficient Data", 401));

    // let images = [];
    // for (let i = 0; i < req.body.images.length; i++) {
    //   let base64 = await blobToBase64(req.body.images[i]);
    //   images.push(base64);
    // }
    // let imagesLink = [];

    // if (images)
    //   for (let i = 0; i < images.length; i++) {
    //     const result = await cloudinary.v2.uploader.upload(images[i], {
    //       folder: "ownIt_ProductImages",
    //     });
    //     imagesLink.push({
    //       public_id: result.public_id,
    //       image_url: result.secure_url,
    //     });
    //   }

    // req.body.images = imagesLink;

    const product = await Product.create({
      ...req.body,
      currentConsumer: req.user.id,
      ownerships: [req.user.id],
      manufacturer: req.user.id,
    });

    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const prodId = req.params.productId;
    const product = await Product.findById(prodId).populate("manufacturer");
    if (!product) {
      return next(new ErrorHandler("Product Not Found", 404));
    } else {
      res.status(201).json({
        success: true,
        product,
      });
    }
  } catch (error) {
    next(new ErrorHandler(error));
  }
};

exports.getMyProducts = async (req, res, next) => {
  try {
    const products = await Product.find({ currentConsumer: req.user.id });
    res.status(201).json({
      success: true,
      products,
    });
  } catch (error) {
    return next(new ErrorHandler(error));
  }
};
