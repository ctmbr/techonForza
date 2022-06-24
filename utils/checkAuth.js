const checkAuth = (req, res, next) => {
  console.log(req.session.username, req.session.loggedIn);
  if (!req.session.loggedIn) {
    console.log("you are not logged in");
    // res.redirect("/login");
  } else {
    console.log("ok , next");
    // next();
  }
};

module.exports = checkAuth;
