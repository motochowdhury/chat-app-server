function dynamicTitle(page_title) {
  return function (req, res, next) {
    res.locals.html = true;
    res.locals.title = `${page_title} - ${process.env.APPLICATION_NAME}`;
    next();
  };
}

module.exports = dynamicTitle;
