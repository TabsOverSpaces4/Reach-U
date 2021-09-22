const errorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

const {
  createGiveAwayItemDocument,
  getGiveAwayItemDocumentById,
  updateGiveAwayItemDocumentById,
  deleteGiveAwayItemDocumentById,
} = require("../services/giveawayItem");

/**
 * @route   POST /api/v1/giveAwayItems
 * @desc    Create a new giveAwayItem for the logged in user.
 */
exports.createGiveAwayItem = asyncHandler(async (req, res, next) => {
  req.body.giveAwayPost = req.params.giveAwayId;

  const newGiveAwayItem = await createGiveAwayItemDocument(req.body);

  res.status(201).json({
    success: true,
    message: "The giveAwayItem was created successfully.",
    data: newGiveAwayItem,
  });
});

/**
 * @route   GET /api/v1/giveAwayItems
 * @desc    Get all giveAwayItems
 */
exports.getAllGiveAwayItems = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

/**
 * @route   GET /api/v1/giveAwayItems/:giveAwayItemId
 * @desc    Get a single giveAwayItem by id.
 */
exports.getGiveAwayItemById = asyncHandler(async (req, res, next) => {
  const giveAwayItem = await getGiveAwayItemDocumentById(
    req.params.giveAwayItemId
  );

  if (!giveAwayItem) {
    return next(
      new errorResponse(
        `GiveAwayItem with id of ${req.params.giveAwayItemId} was not found.`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    message: "The giveAwayItem was found successfully.",
    data: giveAwayItem,
  });
});

/**
 * @route   PUT /api/v1/giveAwayItems/:giveAwayItemId
 * @desc    Update a giveAwayItem by id.
 */
exports.updateGiveAwayItemById = asyncHandler(async (req, res, next) => {
  const giveAwayItem = await updateGiveAwayItemDocumentById(
    req.params.giveAwayItemId,
    req.body
  );

  if (!giveAwayItem) {
    return next(
      new errorResponse(
        `GiveAwayItem with id of ${req.params.giveAwayItemId} was not found.`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    message: "The giveAwayItem was updated successfully.",
    data: giveAwayItem,
  });
});

/**
 * @route   DELETE /api/v1/giveAwayItems/:giveAwayItemId
 * @desc    Delete a giveAwayItem by id.
 */
exports.deleteGiveAwayItemById = asyncHandler(async (req, res, next) => {
  await deleteGiveAwayItemDocumentById(req.params.giveAwayItemId);

  res.status(200).json({
    success: true,
    message: "The giveAwayItem was deleted successfully.",
  });
});
