const asyncHandler = require("../middleware/async");
const GiveAway = require("../models/GiveAway");

exports.createGiveAwayDocument = asyncHandler(async (reqBody) => {
  return await GiveAway.create(reqBody);
});

exports.getGiveAwayDocumentById = asyncHandler(async (id) => {
  return await GiveAway.findById(id).populate(
    "user pickupLocation images items"
  );
});

exports.updateGiveAwayDocumentById = asyncHandler(async (id, reqBody) => {
  return await GiveAway.findByIdAndUpdate(id, reqBody, {
    new: true,
    runValidators: true,
  });
});

exports.deleteGiveAwayDocumentById = asyncHandler(async (id) => {
  return await GiveAway.findByIdAndDelete(id);
});
