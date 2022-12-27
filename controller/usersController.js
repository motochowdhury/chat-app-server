// External Imports
const bcrypt = require("bcrypt");

// Get Login Page
function getUsers(req, res, next) {
  res.render("users");
}

// Add user
async function addUser(req, res, next) {
  let newUser;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  if (req.files && req.files.length > 0) {
    newUser = new User({
      ...req.body,
      avatar: req.files[0].filename,
      password: hashedPassword,
    });
  } else {
    newUser = new User({
      ...req.body,
      password: hashedPassword,
    });
  }

  // save user and send error
  try {
    const result = await newUser.save();
    res.status(200).json({
      message: "User was saved successfully",
    });
  } catch (error) {
    res.status(500).json({
      eroor: {
        common: {
          msg: "Unkown Error occured",
        },
      },
    });
  }
}

// Exports Modules
module.exports = {
  getUsers,
  addUser,
};
