const asyncHandler = require("../middleware/async");
const Location = require("../models/Location");

exports.createLocationDocument = asyncHandler(async (reqBody) => {
  return await Location.create(reqBody);
});

exports.getLocationDocumentById = asyncHandler(async (id) => {
  return await Location.findById(id);
});

exports.updateLocationDocumentById = asyncHandler(async (id, reqBody) => {
  return await Location.findByIdAndUpdate(id, reqBody, {
    new: true,
    runValidators: true,
  });
});

exports.deleteLocationDocumentById = asyncHandler(async (id) => {
  return await Location.findByIdAndDelete(id);
});
