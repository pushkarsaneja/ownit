const express = require("express");
const {
  createReport,
  getReportDetails,
  getAllReports,
  updateReportStatus,
  streamReportData,
} = require("../controllers/stolenReportController");
const { isAuthenticatedUser } = require("../middlewares/auth");
const {
  useServerSentEventsMiddleware,
} = require("../middlewares/serverSentEventsMiddleware");

const router = express.Router();

router.post("/create", isAuthenticatedUser, createReport);
// router.get("/all", isAuthenticatedUser, getAllReports);
router.get(
  "/streamReports",
  isAuthenticatedUser,
  useServerSentEventsMiddleware,
  streamReportData
);
router.put("/update/status", isAuthenticatedUser, updateReportStatus);
router.get("/:reportId", isAuthenticatedUser, getReportDetails);
module.exports = router;
