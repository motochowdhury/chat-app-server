// External import
const express = require("express");
const router = express.Router();

// Internal Imports
const { getUsers } = require("../controller/usersController");
const dynamicTitle = require("../middlewares/common/dynamicTitle");
const avatarUpload = require("../middlewares/users/avatarUpload");
const {
  addUserValidator,
  addUserValidationHandler,
} = require("../middlewares/users/usersValidator");

// Login Router
router.get("/", dynamicTitle("Inbox"), getUsers);

router.post("/", avatarUpload, addUserValidator, addUserValidationHandler);
// Export Modules
module.exports = router;
