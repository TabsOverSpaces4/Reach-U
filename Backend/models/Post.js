const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
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
  image: {
    // Base64 string
    type: String,
    ref: "Image",
  },
  likes: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Post", PostSchema);
