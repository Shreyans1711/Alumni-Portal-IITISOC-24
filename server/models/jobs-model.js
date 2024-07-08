const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  JobName: {
    type: String,
    required: true,
  },
  JobDetails: {
    type: String,
    required: true,
  },
  JobLink: {
    type: String,
    default: "https://www.google.com/",
  },
});

module.exports = mongoose.model("Jobs", userSchema);
