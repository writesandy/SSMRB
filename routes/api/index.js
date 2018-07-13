const router = require("express").Router();
const artistsRoutes = require("./artists");
const account = require("./account/signin.js")
<<<<<<< HEAD
=======
const path = require("path");

>>>>>>> c2a850bc6adace00254d4483c04533b088cfe1f4
// Article routes
router.use("/saved", artistsRoutes);

router.use("/account", account)

<<<<<<< HEAD
=======
// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });  

>>>>>>> c2a850bc6adace00254d4483c04533b088cfe1f4
module.exports = router;