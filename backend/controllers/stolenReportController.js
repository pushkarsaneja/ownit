const ErrorHandler = require("../utils/errorHandler");
const Report = require("../models/stolenReportModel");
const Product = require("../models/productModel");

exports.createReport = async (req, res, next) => {
  try {
    const { productId } = req.body;
    if (!productId) {
      return next(new ErrorHandler("Incomplete data to submit Report", 400));
    }

    const product = await Product.findById(productId);
    if (product.currentOwner.toString() !== req.user.id.toString()) {
      return next(
        new ErrorHandler("You are not the current owner of the product", 401)
      );
    }
    const report = await Report.create({
      productId,
      reportingDate: Date.now(),
      reportedUser: req.user.id,
    });

    await Product.findOneAndUpdate(
      { _id: productId },
      {
        $set: {
          reportId: report._id,
        },
      }
    );

    res.status(201).json({
      success: true,
      report,
    });
  } catch (err) {
    return next(new ErrorHandler(err));
  }
};

exports.getReportDetails = async (req, res, next) => {
  try {
    const { reportId } = req.params;
    const report = await Report.findOne({ _id: reportId }).populate([
      {
        path: "productId",
        select: "title images",
      },
      {
        path: "reportedUser",
        select: "name email profile",
      },
    ]);
    res.status(200).json({
      success: true,
      report,
    });
  } catch (err) {
    return next(new ErrorHandler(err));
  }
};

exports.getAllReports = async (req, res, next) => {
  try {
    const reports = await Report.find().populate([
      {
        path: "productId",
        select: "title images",
      },
      {
        path: "reportedUser",
        select: "name email profile",
      },
    ]);
    res.status(200).json({
      success: true,
      reports,
    });
  } catch (err) {
    return next(new ErrorHandler(err));
  }
};

exports.markProductAsUnstolen = async (req, res, next) => {
  try {
    const { productId } = req.body;
    const product = await Product.findOne({ _id: productId }).select(
      "reportId"
    );
    console.log(product.reportId);
    await Report.findByIdAndUpdate(
      { _id: product.reportId },
      {
        $set: {
          resolvedUser: req.user.id,
          resolvedDate: Date.now(),
        },
      }
    );
    await Product.findByIdAndUpdate(
      { _id: productId },
      {
        $set: {
          reportId: null,
        },
      }
    );
    res.status(200).json({
      success: true,
    });
  } catch (err) {
    return next(new ErrorHandler(err));
  }
};
