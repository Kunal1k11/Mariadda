const express = require("express");
const { register, login } = require("../controllers/user");
const router = express.Router();

// REGISTER USER 
router.post("/register", register);
// LOGIN USER 
router.post("/login", login)

module.exports = router;