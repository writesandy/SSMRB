const router = require("express").Router();
const artistsRoutes = require("./artists");
const account = require("./account/signin.js")
const path = require("path");

// Article routes
router.use("/account", account);

router.use("/artist", artistsRoutes)

// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });  

module.exports = router;