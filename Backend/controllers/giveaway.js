const errorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

const {
  createGiveAwayDocument,
  getGiveAwayDocumentById,
  updateGiveAwayDocumentById,
  deleteGiveAwayDocumentById,
} = require("../services/giveaway");

/**
 * @route   POST /api/v1/giveAways
 * @desc    Create a new giveAway for the logged in user.
 */
exports.createGiveAway = asyncHandler(async (req, res, next) => {
  req.body.user = req.user._id;

  const newGiveAway = await createGiveAwayDocument(req.body);

  res.status(201).json({
    success: true,
    message: "The giveAway was created successfully.",
    data: newGiveAway,
  });
});

/**
 * @route   GET /api/v1/giveAways
 * @desc    Get all giveAways
 */
exports.getAllGiveAways = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

/**
 * @route   GET /api/v1/giveAways/:giveAwayId
 * @desc    Get a single giveAway by id.
 */
exports.getGiveAwayById = asyncHandler(async (req, res, next) => {
  const giveAway = await getGiveAwayDocumentById(req.params.giveAwayId);

  if (!giveAway) {
    return next(
      new errorResponse(
        `GiveAway with id of ${req.params.giveAwayId} was not found.`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    message: "The giveAway was found successfully.",
    data: giveAway,
  });
});

/**
 * @route   PUT /api/v1/giveAways/:giveAwayId
 * @desc    Update a giveAway by id.
 */
exports.updateGiveAwayById = asyncHandler(async (req, res, next) => {
  const giveAway = await updateGiveAwayDocumentById(
    req.params.giveAwayId,
    req.body
  );

  if (!giveAway) {
    return next(
      new errorResponse(
        `GiveAway with id of ${req.params.giveAwayId} was not found.`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    message: "The giveAway was updated successfully.",
    data: giveAway,
  });
});

/**
 * @route   DELETE /api/v1/giveAways/:giveAwayId
 * @desc    Delete a giveAway by id.
 */
exports.deleteGiveAwayById = asyncHandler(async (req, res, next) => {
  await deleteGiveAwayDocumentById(req.params.giveAwayId);

  res.status(200).json({
    success: true,
    message: "The giveAway was deleted successfully.",
  });
});
