const asyncHandler = require("../middleware/async");
const mongoose = require("mongoose");
const Image = require("../models/Image");

exports.createImageDocument = asyncHandler(async (imageData) => {
  return await Image.create({ image: imageData });
});

exports.getImageDocumentById = asyncHandler(async (imageId) => {
  return await Image.findById(imageId);
});
