const mongoose = require("mongoose");

const GiveAwaySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title."],
    },
    caption: {
      type: String,
      default: "",
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please add a reference User ID"],
    },
    images: [
      {
        // Base64 string
        type: mongoose.Schema.Types.ObjectId,
        ref: "Image",
        default: [],
      },
    ],
    pickupLocation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location",
      required: [true, "Please add a reference location ID"],
    },
    contactNumber: {
      type: Number,
      required: [true, "Please add a phone number."],
    },
  },
  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);

GiveAwaySchema.virtual("items", {
  ref: "GiveAwayItem",
  localField: "_id",
  foreignField: "giveAwayPost",
  justOne: false,
});

module.exports = mongoose.model("GiveAway", GiveAwaySchema);
