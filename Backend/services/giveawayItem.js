const asyncHandler = require("../middleware/async");
const GiveAwayItem = require("../models/GiveAwayItem");

exports.createGiveAwayItemDocument = asyncHandler(async (reqBody) => {
  return await GiveAwayItem.create(reqBody);
});

exports.getGiveAwayItemDocumentById = asyncHandler(async (id) => {
  return await GiveAwayItem.findById(id);
});

exports.updateGiveAwayItemDocumentById = asyncHandler(async (id, reqBody) => {
  return await GiveAwayItem.findByIdAndUpdate(id, reqBody, {
    new: true,
    runValidators: true,
  });
});

exports.deleteGiveAwayItemDocumentById = asyncHandler(async (id) => {
  return await GiveAwayItem.findByIdAndDelete(id);
});
