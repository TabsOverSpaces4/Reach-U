const router = require("express").Router({ mergeParams: true });

const { protect } = require("../middleware/auth");

const {
  createLocation,
  getLocationById,
  updateLocationById,
  deleteLocationById,
} = require("../controllers/location");

router.route("/").post(protect, createLocation);

router
  .route("/:locationId")
  .get(protect, getLocationById)
  .put(protect, updateLocationById)
  .delete(protect, deleteLocationById);

module.exports = router;
