// Get Login Page
function getUsers(req, res, next) {
  res.render("users");
}

// Exports Modules
module.exports = {
  getUsers,
};
