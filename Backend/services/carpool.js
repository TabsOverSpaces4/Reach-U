const asyncHandler = require("../middleware/async");
const Carpool = require("../models/Carpool");

exports.createCarpoolDocument = asyncHandler(async (reqBody) => {
  return await Carpool.create(reqBody);
});

exports.getAllFutureCarpoolDocuments = asyncHandler(async () => {
  return await Carpool.find({ dateAndTime: { $gt: Date.now() } }).populate(
    "driver startLocation destinationLocation stopLocations"
  );
});

exports.getCarpoolDocumentById = asyncHandler(async (id) => {
  return await Carpool.findById(id);
});

exports.updateCarpoolDocumentById = asyncHandler(async (id, reqBody) => {
  return await Carpool.findByIdAndUpdate(id, reqBody, {
    new: true,
    runValidators: true,
  });
});

exports.deleteCarpoolDocumentById = asyncHandler(async (id) => {
  return await Carpool.findByIdAndDelete(id);
});
