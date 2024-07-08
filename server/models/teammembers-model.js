const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Department: {
    type: String,
    required: true,
  },
  Designation: {
    type: String,
    required: true,
  },
  IgLink: {
    type: String,
    default: "https://www.google.com/",
  },
  LinLink: {
    type: String,
    default: "https://www.google.com/",
  },
  GitLink: {
    type: String,
    default: "https://www.google.com/",
  },
  ImgURL: {
    type: String,
    default:
      "https://st.depositphotos.com/2101611/4338/v/600/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg",
  },
});

module.exports = mongoose.model("TeamMembers", userSchema);
