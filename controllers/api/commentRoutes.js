const router = require("express").Router();
module.exports = router;

const { Comment } = require("../../models");
const checkAuth = require("../../utils/checkAuth");

router.get("/", checkAuth, async (req, res) => {
  try {
    const allComments = await Comment.findAll();
    res.json(allComments);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/:blogId", checkAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      userId: req.session.userId,
      blogId: req.params.blogId,
    });

    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:commentId", checkAuth, async (req, res) => {
  try {
    const [affectedRows] = await Comment.update(req.body, {
      where: { id: req.params.commentId },
    });
    if (affectedRows > 0) res.status(200).end();
    else res.status(404).end();
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
