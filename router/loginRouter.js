// External import
const express = require("express");
const router = express.Router();

// Internal Imports
const { getLogin } = require("../controller/loginController");

// Login Router
router.get("/", getLogin);

// Export Modules
module.exports = router;
