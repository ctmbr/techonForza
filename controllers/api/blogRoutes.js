const router = require("express").Router();
const { Blog } = require("../../models");
const checkAuth = require("../../utils/checkAuth");

router.get("/", checkAuth, async (req, res) => {
  try {
    const allPosts = await Blog.findAll();
    res.json(allPosts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", checkAuth, async (req, res) => {
  try {
    const newBlogpost = await Blog.create({
      ...req.body,
      userId: req.session.userId,
    });

    res.json(newBlogpost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
