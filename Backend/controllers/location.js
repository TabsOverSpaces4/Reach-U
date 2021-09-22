const errorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

const {
  createLocationDocument,
  getLocationDocumentById,
  updateLocationDocumentById,
  deleteLocationDocumentById,
} = require("../services/location");

/**
 * @route   POST /api/v1/locations
 * @desc    Create a new location for the logged in user.
 */
exports.createLocation = asyncHandler(async (req, res, next) => {
  req.body.user = req.user._id;

  const newLocation = await createLocationDocument(req.body);

  res.status(201).json({
    success: true,
    message: "The location was created successfully.",
    data: newLocation,
  });
});

/**
 * @route   GET /api/v1/locations
 * @desc    Get all locations
 */
exports.getAllLocations = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

/**
 * @route   GET /api/v1/locations/:locationId
 * @desc    Get a single location by id.
 */
exports.getLocationById = asyncHandler(async (req, res, next) => {
  const location = await getLocationDocumentById(req.params.locationId);

  if (!location) {
    return next(
      new errorResponse(
        `Location with id of ${req.params.locationId} was not found.`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    message: "The location was found successfully.",
    data: location,
  });
});

/**
 * @route   PUT /api/v1/locations/:locationId
 * @desc    Update a location by id.
 */
exports.updateLocationById = asyncHandler(async (req, res, next) => {
  const location = await updateLocationDocumentById(
    req.params.locationId,
    req.body
  );

  if (!location) {
    return next(
      new errorResponse(
        `Location with id of ${req.params.locationId} was not found.`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    message: "The location was updated successfully.",
    data: location,
  });
});

/**
 * @route   DELETE /api/v1/locations/:locationId
 * @desc    Delete a location by id.
 */
exports.deleteLocationById = asyncHandler(async (req, res, next) => {
  await deleteLocationDocumentById(req.params.locationId);

  res.status(200).json({
    success: true,
    message: "The location was deleted successfully.",
  });
});
