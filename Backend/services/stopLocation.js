const asyncHandler = require("../middleware/async");
const StopLocation = require("../models/StopLocation");

exports.createStopLocationDocument = asyncHandler(async (reqBody) => {
  return await StopLocation.create(reqBody);
});

exports.getAllFutureStopLocationDocuments = asyncHandler(async () => {
  return await StopLocation.find();
});

exports.getStopLocationDocumentById = asyncHandler(async (id) => {
  return await StopLocation.findById(id);
});

exports.updateStopLocationDocumentById = asyncHandler(async (id, reqBody) => {
  return await StopLocation.findByIdAndUpdate(id, reqBody, {
    new: true,
    runValidators: true,
  });
});

exports.deleteStopLocationDocumentById = asyncHandler(async (id) => {
  return await StopLocation.findByIdAndDelete(id);
});
