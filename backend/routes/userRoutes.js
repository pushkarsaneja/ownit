const express = require("express");
const {
  addAddress,
  getAllAddress,
  updatePersonalInfo,
  getPersonalInfo,
  deleteSingleAddress,
  getAllUsers,
  getUserTransactions,
  getUserAssests,
  getSearchUserInfo,
} = require("../controllers/userControllers");
const { isAuthenticatedUser } = require("../middlewares/auth");

const router = express.Router();

router.get("/getAllAddress", isAuthenticatedUser, getAllAddress);
router.get("/getPersonalInfo", isAuthenticatedUser, getPersonalInfo);
router.post("/getUser", isAuthenticatedUser, getSearchUserInfo);
router.post("/addAddress", isAuthenticatedUser, addAddress);
router.put("/updatePersonalInfo", isAuthenticatedUser, updatePersonalInfo);
router.delete("/deleteAddress", isAuthenticatedUser, deleteSingleAddress);
router.get("/getUserTransactions", isAuthenticatedUser, getUserTransactions);
router.get("/assests", isAuthenticatedUser, getUserAssests);

// testing
router.get("/allUsers", getAllUsers);
module.exports = router;
