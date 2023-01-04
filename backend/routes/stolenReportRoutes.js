const express = require("express");
const {
  createReport,
  getReportDetails,
  updateReportStatus,
  streamReportData,
} = require("../controllers/stolenReportController");
const { isAuthenticatedUser, AuthorizeRole } = require("../middlewares/auth");
const {
  useServerSentEventsMiddleware,
} = require("../middlewares/serverSentEventsMiddleware");

const router = express.Router();

router.post(
  "/create",
  isAuthenticatedUser,
  AuthorizeRole("authority"),
  createReport
);
router.get(
  "/streamReports",
  isAuthenticatedUser,
  AuthorizeRole("authority"),
  useServerSentEventsMiddleware,
  streamReportData
);
router.put(
  "/update/status",
  isAuthenticatedUser,
  AuthorizeRole("authority"),
  updateReportStatus
);
router.get(
  "/:reportId",
  isAuthenticatedUser,
  AuthorizeRole("authority"),
  getReportDetails
);
module.exports = router;
