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
      {
        path: "resolvedUser",
        select: "name profile",
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

// exports.getAllReports = async (req, res, next) => {
//   try {
//     const reports = await Report.find().populate([
//       {
//         path: "productId",
//         select: "title images",
//       },
//       {
//         path: "reportedUser",
//         select: "name email profile",
//       },
//     ]);
//     res.status(200).json({
//       success: true,
//       reports,
//     });
//   } catch (err) {
//     return next(new ErrorHandler(err));
//   }
// };

exports.updateReportStatus = async (req, res, next) => {
  try {
    let { reportId, productId, status, remarks = null } = req.body;

    status = status.toString().toLowerCase();

    await Report.findByIdAndUpdate(
      { _id: reportId },
      {
        $set: {
          remarks: remarks,
          resolvedUser: req.user.id,
          resolvedDate: Date.now(),
          status: status,
        },
      }
    );
    if (status === "closed") {
      await Product.findByIdAndUpdate(
        { _id: productId },
        {
          $set: {
            reportId: null,
          },
        }
      );
    }
    res.status(200).json({
      success: true,
    });
  } catch (err) {
    return next(new ErrorHandler(err));
  }
};

const getReportsData = async () => {
  const reports = await Report.find({}).populate([
    {
      path: "productId",
      select: "title",
    },
    {
      path: "reportedUser",
      select: "name profile",
    },
    {
      path: "resolvedUser",
      select: "name profile",
    },
  ]);
  // const reports = new Date(Date.now()).toLocaleTimeString();
  return reports;
};

exports.streamReportData = async (req, res, next) => {
  try {
    let interval = setInterval(async () => {
      const data = await getReportsData();
      res.sendEventStreamData(data);
    }, 10000);

    // on closing the server emit event
    req.on("close", () => {
      clearInterval(interval);
      res.end();
    });
  } catch (err) {
    return next(new ErrorHandler(err));
  }
};
