const router = require("express").Router();
const artistsRoutes = require("./artists");

// Article routes
router.use("/saved", artistsRoutes);

module.exports = router;