const router = require("express").Router({ mergeParams: true });

const { protect } = require("../middleware/auth");

const advancedResults = require("../middleware/advancedResults");

const GiveAway = require("../models/GiveAway");

const {
  createGiveAway,
  getAllGiveAways,
  getGiveAwayById,
  updateGiveAwayById,
  deleteGiveAwayById,
} = require("../controllers/giveaway");

const {
  createGiveAwayItem,
  getGiveAwayItemById,
  updateGiveAwayItemById,
  deleteGiveAwayItemById,
} = require("../controllers/giveawayItem");

router
  .route("/")
  .post(protect, createGiveAway)
  .get(
    advancedResults(GiveAway, "user pickupLocation images items"),
    getAllGiveAways
  );

router
  .route("/:giveAwayId")
  .get(protect, getGiveAwayById)
  .put(protect, updateGiveAwayById)
  .delete(protect, deleteGiveAwayById);

router.route("/:giveAwayId/item").post(protect, createGiveAwayItem);

router
  .route("/:giveAwayId/item/:giveAwayItemId")
  .get(protect, getGiveAwayItemById)
  .put(protect, updateGiveAwayItemById)
  .delete(protect, deleteGiveAwayItemById);

module.exports = router;
