const express = require("express");
const {
  createTransaction,
  getSingleTransaction,
} = require("../controllers/transactionControllers");
const { isAuthenticatedUser } = require("../middlewares/auth");

const router = express.Router();

router.post("/create", isAuthenticatedUser, createTransaction);
router.get("/:id", isAuthenticatedUser, getSingleTransaction);
module.exports = router;
