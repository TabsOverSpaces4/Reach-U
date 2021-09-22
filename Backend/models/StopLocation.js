const mongoose = require("mongoose");

const StopLocationSchema = new mongoose.Schema({
  customName: { type: String },
  latitude: {
    type: Number,
    required: [true, "Please add a latitude for this location."],
  },
  longitude: {
    type: Number,
    required: [true, "Please add a longitude for this location."],
  },
  stopNumber: {
    type: Number,
    required: [true, "Please add a stop number for this stop location."],
  },
  stopCost: {
    type: Number,
    required: [true, "Please add a cost for this stop location."],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Please add a reference User ID for this stop location."],
  },
});

module.exports = mongoose.model("StopLocation", StopLocationSchema);
