const express = require("express");
const {
  createTransactions,
  getSingleTransaction,
} = require("../controllers/transactionControllers");
const { isAuthenticatedUser } = require("../middlewares/auth");

const router = express.Router();

router.post("/create", isAuthenticatedUser, createTransactions);
router.get("/:id", isAuthenticatedUser, getSingleTransaction);
module.exports = router;
