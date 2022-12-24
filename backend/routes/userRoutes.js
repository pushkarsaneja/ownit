const express = require("express");
const {
  addAddress,
  getAllAddress,
  updatePersonalInfo,
  getPersonalInfo,
  deleteSingleAddress,
} = require("../controllers/userControllers");
const { isAuthenticatedUser } = require("../middlewares/auth");

const router = express.Router();

router.get("/getAllAddress", isAuthenticatedUser, getAllAddress);
router.get("/getPersonalInfo", isAuthenticatedUser, getPersonalInfo);

router.post("/addAddress", isAuthenticatedUser, addAddress);
router.put("/updatePersonalInfo", isAuthenticatedUser, updatePersonalInfo);
router.delete("/deleteAddress", isAuthenticatedUser, deleteSingleAddress);

module.exports = router;
