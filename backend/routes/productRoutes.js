const express = require("express");
const {
  postProduct,
  getProduct,
  getMyProducts,
} = require("../controllers/productControllers");
const { isAuthenticatedUser, AuthorizeRole } = require("../middlewares/auth");
const router = express.Router();

router.post(
  "/add-product",
  isAuthenticatedUser,
  AuthorizeRole("manufacturer"),
  postProduct
);

router.get("/product/:productId", isAuthenticatedUser, getProduct);

router.get("/myProducts", isAuthenticatedUser, getMyProducts);

module.exports = router;
