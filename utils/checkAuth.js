const checkAuth = (req, res, next) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
};

module.exports = checkAuth;
