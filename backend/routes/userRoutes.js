const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// @route   POST /api/user/       -> Register a new user
// @route   GET  /api/user/       -> Get/search all users (protected)
// @route   POST /api/user/login  -> Authenticate user (login)

router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", authUser);

module.exports = router;
