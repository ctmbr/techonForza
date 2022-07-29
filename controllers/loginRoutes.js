const router = require("express").Router();
const { Blog, Comment, User } = require("../models");
const checkAuth = require("../utils/checkAuth.js");

router.get("/", checkAuth, async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      where: { userId: req.session.userId },
    });
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    // const blogs = ["1", "2", "3"];
    res.render("admin", { blogs, isLoggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    return;
    // res.redirect("login");
  }
});

module.exports = router;
