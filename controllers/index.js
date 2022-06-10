const router = require("express").Router();

// const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./api");
// const loginRoutes = require("./loginRoutes");

// router.use("/", homeRoutes);
router.use("/api", apiRoutes);
// router.use("/login", loginRoutes);

module.exports = router;
