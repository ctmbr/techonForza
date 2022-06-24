const router = require("express").Router();
const { Blog, Comment, User } = require("../models");

router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll({ include: [User, Comment] });
    const blogs = blogData.map((blog) => {
      blog.get({ plain: true });
    });
    res.render("visible", { blogs });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
