// External import
const express = require("express");
const router = express.Router();

// Internal Imports
const { getUsers } = require("../controller/usersController");

// Login Router
router.get("/", getUsers);

// Export Modules
module.exports = router;
