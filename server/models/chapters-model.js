const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  ChapterName: {
    type: String,
    required: true,
  },
  ChapterDetails: {
    type: String,
    required: true,
  },
  ChapterImgURL: {
    type: String,
    default: "https://i0.wp.com/wallpapercave.com/wp/wp3493599.jpg?ssl=1",
  },
});

module.exports = mongoose.model("Chapters", userSchema);
