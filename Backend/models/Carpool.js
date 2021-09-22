const mongoose = require("mongoose");

const CarpoolSchema = new mongoose.Schema({
  driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Please add a User ID for the driver."],
  },
  dateAndTime: {
    type: Date,
  },
  carModel: {
    type: String,
    default: "",
  },
  startLocation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Location",
  },
  destinationLocation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Location",
  },
  seatCount: {
    type: Number,
  },
  seatCost: {
    type: Number,
  },
  stopLocations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "StopLocation",
    },
  ],
});

module.exports = mongoose.model("Carpool", CarpoolSchema);
