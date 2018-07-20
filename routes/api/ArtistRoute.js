const router = require("express").Router();
const ArtistController = require("../../controllers/ArtistController");


// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(ArtistController.findById)
  .put(ArtistController.update)
  .delete(ArtistController.remove);

module.exports = router;
