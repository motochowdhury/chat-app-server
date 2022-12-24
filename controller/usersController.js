// Get Login Page
function getUsers(req, res, next) {
  res.render("users", {
    title: "Users Chat_application",
  });
}

// Exports Modules
module.exports = {
  getUsers,
};
