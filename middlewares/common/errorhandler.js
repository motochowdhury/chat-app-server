const createError = require("http-errors");

// 404 not found handler
function notFoundghandler(req, res, next) {
  next(createError(404, "Your Requested Content Was not found"));
}

// Default Error Handler
function eroorhandler(err, req, res, next) {
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };
  res.status(err.status || 500);

  if (res.locals.html) {
    res.render("error", {
      title: "Error Page",
    });
  } else {
    res.json(res.locals.error);
  }
}

module.exports = {
  notFoundghandler,
  eroorhandler,
};
