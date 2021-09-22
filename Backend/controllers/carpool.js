const asyncHandler = require("../middleware/async");
const {
  createCarpoolDocument,
  getAllFutureCarpoolDocuments,
  getCarpoolDocumentById,
  updateCarpoolDocumentById,
  deleteCarpoolDocumentById,
} = require("../services/carpool");
const errorResponse = require("../utils/errorResponse");

/**
 * @route   POST /api/v1/carpool
 * @desc    Create a new carpool for the logged in user.
 */
exports.createCarpool = asyncHandler(async (req, res, next) => {
  req.body.driver = req.user._id;

  const carpool = await createCarpoolDocument(req.body);

  res.status(201).json({
    success: true,
    message: "The carpool was successfully created.",
    data: carpool,
  });
});

/**
 * @route   GET /api/v1/carpool
 * @desc    Get all future carpools.
 */
exports.getAllCarpools = asyncHandler(async (req, res, next) => {
  const carpools = await getAllFutureCarpoolDocuments();
  res.status(200).json({
    success: true,
    message: "The carpools were successfully found.",
    data: carpools,
  });
});

/**
 * @route   GET /api/v1/carpool
 * @desc    Get a carpool by ID.
 */
exports.getCarpoolById = asyncHandler(async (req, res, next) => {
  const carpool = await getCarpoolDocumentById(req.params.carpoolId);

  if (!carpool) {
    return next(
      new errorResponse(
        `Carpool with ID of ${req.params.carpoolId} was not found.`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    message: "The carpool was found successfully.",
    data: carpool,
  });
});

/**
 * @route   PUT /api/v1/carpool
 * @desc    Update a carpool by ID.
 */
exports.updateCarpoolById = asyncHandler(async (req, res, next) => {
  const carpool = await updateCarpoolDocumentById(
    req.params.carpoolId,
    req.body
  );

  if (!carpool) {
    return next(
      new errorResponse(
        `Carpool with ID of ${req.params.carpoolId} was not found.`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    message: "The carpool was updated successfully.",
    data: carpool,
  });
});

/**
 * @route   DELETE /api/v1/carpool
 * @desc    Delete a carpool by ID.
 */
exports.deleteCarpoolById = asyncHandler(async (req, res, next) => {
  await deleteCarpoolDocumentById(req.params.carpoolId);

  res.status(200).json({
    success: true,
    message: "The carpool was deleted successfully.",
  });
});
