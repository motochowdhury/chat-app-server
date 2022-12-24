// Get Login Page
function getInbox(req, res, next) {
  res.render("inbox", {
    title: "Inbox Chat_application",
  });
}

// Exports Modules
module.exports = {
  getInbox,
};
