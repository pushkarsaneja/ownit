const express = require("express");
const {
  postProduct,
  getProduct,
  getMyProducts,
  getAllPorducts,
  getProductOwnerships,
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
router.get(
  "/product/ownerships/:productId",
  isAuthenticatedUser,
  getProductOwnerships
);
router.get("/myProducts", isAuthenticatedUser, getMyProducts);

// testing
router.get("/all", getAllPorducts);
module.exports = router;
