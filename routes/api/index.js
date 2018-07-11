const router = require("express").Router();
const artistsRoutes = require("./artists");
const home = require("./account/signin.js")
// Article routes
router.use("/saved", artistsRoutes);

router.use("/articles",)

module.exports = router;