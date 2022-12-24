// External import
const express = require("express");
const router = express.Router();

// Internal Imports
const { getLogin } = require("../controller/loginController");
const dynamicTitle = require("../middlewares/common/dynamicTitle");

// Login Router
router.get("/", dynamicTitle("Inbox"), getLogin);

// Export Modules
module.exports = router;
