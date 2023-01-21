const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const User = require("../models/userModel");
const crypto = require("crypto");
exports.postProduct = async (req, res, next) => {
  try {
    const { title, price, categories, description, quantity, nft, token } =
      req.body;

    if (
      !title ||
      !price ||
      !categories ||
      categories.length === 0 ||
      !description ||
      !nft ||
      !token
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

    for (let i = 0; i < quantity; i++) {
      const product = await Product.create({
        ...req.body,
        currentOwner: req.user._id,
        ownerships: [{ user: req.user._id, date: Date.now() }],
        manufacturer: req.user._id,
        nft,
        token: token,
      });

      await User.findOneAndUpdate(
        { _id: req.user._id },
        {
          $push: {
            currentAssests: product._id,
            allAssests: product._id,
          },
        }
      );
    }

    res.status(201).json({
      success: true,
    });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const prodId = req.params.productId;
    const product = await Product.findById(prodId)
      .populate("manufacturer")
      .select("-ownerships");
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
    const products = await Product.find({ currentConsumer: req.user._id });
    res.status(201).json({
      success: true,
      products,
    });
  } catch (error) {
    return next(new ErrorHandler(error));
  }
};

exports.getProductOwnerships = async (req, res, next) => {
  try {
    const prodId = req.params.productId;
    const product = await Product.find({ _id: prodId })
      .select("ownerships -_id")
      .populate("ownerships.user", "name role _id");

    if (!product) {
      return next(new ErrorHandler("Product Not Found", 404));
    } else {
      res.status(201).json({
        success: true,
        product,
      });
    }
  } catch (err) {
    return next(new ErrorHandler(err));
  }
};

// testing purpose only
exports.getAllPorducts = async (req, res, next) => {
  try {
    const products = await Product.find().select(
      "_id title ownerships currentOwner reportId"
    );
    res.status(201).json({
      success: true,
      products,
    });
  } catch (error) {
    return next(new ErrorHandler(error));
  }
};
