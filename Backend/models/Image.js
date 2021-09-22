const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  image: {
    type: String,
  },
});

module.exports = new mongoose.model("Image", ImageSchema);
