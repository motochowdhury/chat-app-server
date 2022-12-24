// External import
const express = require("express");
const router = express.Router();

// Internal Imports
const { getInbox } = require("../controller/inboxController");
const dynamicTitle = require("../middlewares/common/dynamicTitle");

// Login Router
router.get("/", dynamicTitle("Inbox"), getInbox);

// Export Modules
module.exports = router;
