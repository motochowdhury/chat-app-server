// Get Login Page
function getLogin(req, res, next) {
  res.render("login", {
    title: "Login Chat_application",
  });
}

// Exports Modules
module.exports = {
  getLogin,
};
