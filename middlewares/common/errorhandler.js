const createError = require("http-errors");

// 404 not found handler
function notFoundghandler(req, res, next) {
  next(createError(404, "Your Requested Content Was not found"));
}

// Default Error Handler
function eroorhandler(err, req, res, next) {
  res.render("error", {
    title: "Error Page",
  });
}

module.exports = {
  notFoundghandler,
  eroorhandler,
};
