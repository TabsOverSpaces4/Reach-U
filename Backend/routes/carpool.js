const router = require("express").Router({ mergeParams: true });

const { protect } = require("../middleware/auth");

const {
  createCarpool,
  getAllCarpools,
  getCarpoolById,
  updateCarpoolById,
  deleteCarpoolById,
} = require("../controllers/carpool");

router.route("/").post(protect, createCarpool).get(protect, getAllCarpools);

router
  .route("/:carpoolId")
  .get(protect, getCarpoolById)
  .put(protect, updateCarpoolById)
  .delete(protect, deleteCarpoolById);

module.exports = router;
