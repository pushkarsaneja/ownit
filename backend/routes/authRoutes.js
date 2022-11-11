const express = require("express");
const {
  registerUser,
  signInUser,
  logout,
} = require("../controllers/authControllers");

const router = express.Router();

router.post("/register", registerUser);
router.post("/signin", signInUser);
router.get("/logout", logout);

module.exports = router;
