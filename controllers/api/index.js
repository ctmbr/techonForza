const router = require("express").Router();

const comment = require("./commentRoutes");
const blog = require("./blogRoutes");
const user = require("./userRoutes");

router.use("/comment", comment);
router.use("/blog", blog);
router.use("/user", user);

module.exports = router;
