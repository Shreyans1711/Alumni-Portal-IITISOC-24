const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  PublicationName: {
    type: String,
    required: true,
  },
  PublicationDetails: {
    type: String,
    required: true,
  },
  PublicationLink: {
    type: String,
    default: "https://www.google.com/",
  },
});

module.exports = mongoose.model("Newsletter", userSchema);
