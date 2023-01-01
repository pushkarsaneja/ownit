const express = require("express");
const {
  createReport,
  getReportDetails,
  getAllReports,
  markProductAsUnstolen,
} = require("../controllers/stolenReportController");
const { isAuthenticatedUser } = require("../middlewares/auth");

const router = express.Router();

router.post("/create", isAuthenticatedUser, createReport);
router.get("/all", isAuthenticatedUser, getAllReports);
router.get("/:reportId", isAuthenticatedUser, getReportDetails);
router.post("/markUnstolen", isAuthenticatedUser, markProductAsUnstolen);
module.exports = router;
