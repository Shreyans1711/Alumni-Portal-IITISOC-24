const express = require("express");
const router = require("express").Router();
const passport = require("passport");
const passportsetup = require("../controllers/passport-setup");
const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

router.get("/login", (req, res) => {
  res.json({ msg: "login page" });
});

router.post("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.json({ msg: "logout Sucessfull" });
  });
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.redirect("http://localhost:8000/signup");
  } else {
    next();
  }
};

router.get(
  "/google/redirect",
  passport.authenticate("google"),
  authCheck,
  (req, res) => {
    const user = req.user;
    const token = jwt.sign(
      {
        username: user.username,
        email: user.email,
        imgurl: user.imgurl,
      },
      "secret"
    );
    res.cookie("userdata", token);
    res.redirect("http://localhost:8000");
  }
);

router.post("/updateUser", (req, res) => {
  const data = req.body;
  console.log(data);
  User.findOne({ email: data.email }).then((user) => {
    if (user) {
      User.findOneAndUpdate(
        { email: data.email },
        {
          $set: {
            firstname: data.firstname,
            lastname: data.lastname,
            instituteName: data.instituteName,
            department: data.department,
            course: data.course,
            address: data.address,
            work: data.work,
            password: data.password,
          },
        }
      ).then((err, doc) => {
        if (err) {
          console.log(err);
        }
      });
      res.json({ msg: "User updated" });
    } else {
      res.json({ msg: "User not found" });
    }
  });
});

module.exports = router;
