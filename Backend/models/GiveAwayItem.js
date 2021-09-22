const mongoose = require("mongoose");

const GiveAwayItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add an item name."],
  },
  quantity: {
    type: Number,
    default: 1,
  },
  giveAwayPost: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "GiveAway",
    required: [true, "Please add a reference Give Away Post ID"],
  },
});

module.exports = mongoose.model("GiveAwayItem", GiveAwayItemSchema);
