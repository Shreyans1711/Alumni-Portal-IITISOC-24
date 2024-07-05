const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  NewsName: {
    type: String,
    required: true,
  },
  NewsDetails: {
    type: String,
    required: true,
  },
  NewsImgURL: {
    type: String,
    default: "https://i0.wp.com/wallpapercave.com/wp/wp3493599.jpg?ssl=1",
  },
});

module.exports = mongoose.model("AlumniNews", userSchema);
