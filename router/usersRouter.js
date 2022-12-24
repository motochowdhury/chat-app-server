// External import
const express = require("express");
const router = express.Router();

// Internal Imports
const { getUsers } = require("../controller/usersController");
const dynamicTitle = require("../middlewares/common/dynamicTitle");

// Login Router
router.get("/", dynamicTitle("Inbox"), getUsers);

// Export Modules
module.exports = router;
