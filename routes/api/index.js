const router = require("express").Router();
const artistsRoutes = require("./artists");
const account = require("./account/signin.js")
// Article routes
router.use("/saved", artistsRoutes);

router.use("/account", account)

module.exports = router;