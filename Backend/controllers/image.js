const errorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

const {
  createImageDocument,
  getImageDocumentById,
} = require("../services/image");

/**
 * @route   POST /api/v1/images
 * @desc    Create a new image for the logged in user.
 */
exports.createImage = asyncHandler(async (req, res, next) => {
  const imageBase64data = Buffer.from(req.files.image.data, "binary").toString(
    "base64"
  );
  const imageBase64 = `data:${req.files.image.mimetype};base64, ${imageBase64data}`;

  const newImage = await createImageDocument(imageBase64);

  res.status(201).json({
    success: true,
    message: "The image was created successfully.",
    data: newImage,
  });
});

/**
 * @route   GET /api/v1/images/:imageId
 * @desc    Get a single image by id.
 */
exports.getImageById = asyncHandler(async (req, res, next) => {
  const image = await getImageDocumentById(req.params.imageId);

  if (!image) {
    return next(
      new errorResponse(
        `Image with id of ${req.params.imageId} was not found.`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    message: "The image was found successfully.",
    data: image,
  });
});
