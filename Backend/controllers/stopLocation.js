const errorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

const {
  createStopLocationDocument,
  getStopLocationDocumentById,
  updateStopLocationDocumentById,
  deleteStopLocationDocumentById,
} = require("../services/stopLocation");

/**
 * @route   POST /api/v1/stopLocations
 * @desc    Create a new stopLocation for the logged in user.
 */
exports.createStopLocation = asyncHandler(async (req, res, next) => {
  req.body.user = req.user._id;

  const newStopLocation = await createStopLocationDocument(req.body);

  res.status(201).json({
    success: true,
    message: "The stopLocation was created successfully.",
    data: newStopLocation,
  });
});

/**
 * @route   GET /api/v1/stopLocations
 * @desc    Get all stopLocations
 */
exports.getAllStopLocations = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

/**
 * @route   GET /api/v1/stopLocations/:stopLocationId
 * @desc    Get a single stopLocation by id.
 */
exports.getStopLocationById = asyncHandler(async (req, res, next) => {
  const stopLocation = await getStopLocationDocumentById(
    req.params.stopLocationId
  );

  if (!stopLocation) {
    return next(
      new errorResponse(
        `StopLocation with id of ${req.params.stopLocationId} was not found.`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    message: "The stopLocation was found successfully.",
    data: stopLocation,
  });
});

/**
 * @route   PUT /api/v1/stopLocations/:stopLocationId
 * @desc    Update a stopLocation by id.
 */
exports.updateStopLocationById = asyncHandler(async (req, res, next) => {
  const stopLocation = await updateStopLocationDocumentById(
    req.params.stopLocationId,
    req.body
  );

  if (!stopLocation) {
    return next(
      new errorResponse(
        `StopLocation with id of ${req.params.stopLocationId} was not found.`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    message: "The stopLocation was updated successfully.",
    data: stopLocation,
  });
});

/**
 * @route   DELETE /api/v1/stopLocations/:stopLocationId
 * @desc    Delete a stopLocation by id.
 */
exports.deleteStopLocationById = asyncHandler(async (req, res, next) => {
  await deleteStopLocationDocumentById(req.params.stopLocationId);

  res.status(200).json({
    success: true,
    message: "The stopLocation was deleted successfully.",
  });
});
