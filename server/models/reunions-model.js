const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  ReunionName: {
    type: String,
    required: true,
  },
  ReunionDetails: {
    type: String,
    required: true,
  },
  ReunionImgURL: {
    type: String,
    default: "https://i0.wp.com/wallpapercave.com/wp/wp3493599.jpg?ssl=1",
  },
});

module.exports = mongoose.model("Reunions", userSchema);
