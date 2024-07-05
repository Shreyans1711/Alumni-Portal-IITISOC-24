const express = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    default: "",
  },
  email: {
    type: String,
    required: true,
    default: "",
  },
  imgurl: {
    type: String,
  },
  googleId: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  firstname: {
    type: String,
    default: "",
  },
  lastname: {
    type: String,
    default: "",
  },
  instituteName: {
    type: String,
    default: "",
  },
  department: {
    type: String,
    default: "",
  },
  course: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
  work: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Users", userSchema);
