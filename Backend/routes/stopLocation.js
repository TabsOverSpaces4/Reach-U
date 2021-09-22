const router = require("express").Router({ mergeParams: true });

const { protect } = require("../middleware/auth");

const {
  createStopLocation,
  getStopLocationById,
  updateStopLocationById,
  deleteStopLocationById,
} = require("../controllers/stopLocation");

router.route("/").post(protect, createStopLocation);

router
  .route("/:stopLocationId")
  .get(protect, getStopLocationById)
  .put(protect, updateStopLocationById)
  .delete(protect, deleteStopLocationById);

module.exports = router;
