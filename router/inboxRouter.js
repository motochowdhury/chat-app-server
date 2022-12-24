// External import
const express = require("express");
const router = express.Router();

// Internal Imports
const { getInbox } = require("../controller/inboxController");

// Login Router
router.get("/", getInbox);

// Export Modules
module.exports = router;
