// Get Login Page
function getLogin(req, res, next) {
  res.render("login");
}

// Exports Modules
module.exports = {
  getLogin,
};
