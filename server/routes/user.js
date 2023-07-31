const express = require("express");
const { register, login, getProfile } = require("../controllers/user");
const router = express.Router();

// REGISTER USER 
router.post("/register", register);
// LOGIN USER 
router.post("/login", login)
// PROFILE DETAILS
router.get("/getProfile/:username", getProfile);

module.exports = router;