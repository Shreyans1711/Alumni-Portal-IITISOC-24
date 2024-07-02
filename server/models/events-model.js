const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  EventName: {
    type: String,
    required: true,
  },
  EventDetails: {
    type: String,
    required: true,
  },
  EventLink: {
    type: String,
  },
  EventImgURL: {
    type: String,
    default: "https://i0.wp.com/wallpapercave.com/wp/wp3493599.jpg?ssl=1",
  },
});

module.exports = mongoose.model("Events", userSchema);
