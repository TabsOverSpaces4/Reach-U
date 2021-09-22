const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  customName: { type: String },
  latitude: {
    type: Number,
    required: [true, "Please add a latitude for this location."],
  },
  longitude: {
    type: Number,
    required: [true, "Please add a longitude for this location."],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Please add a reference User ID for this location."],
  },
});

module.exports = mongoose.model("Location", LocationSchema);
