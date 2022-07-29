const router = require("express").Router();
const { Blog, Comment, User } = require("../../models");
const checkAuth = require("../../utils/checkAuth");

router.get("/", checkAuth, async (req, res) => {
  try {
    const allPosts = await Blog.findAll({ include: [User, Comment] });
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

router.put("/:postId", checkAuth, async (req, res) => {
  try {
    const [affectedRows] = await Blog.update(req.body, {
      where: { id: req.params.postId },
    });
    if (affectedRows > 0) res.status(200).end();
    else res.status(404).end();
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:postId", checkAuth, async (req, res) => {
  try {
    const [affectedRows] = Blog.destroy({
      where: {
        id: req.params.postId,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(400).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
