const router = require("express").Router();
const passport = require("passport");
const passportsetup = require("../controllers/passport-setup");
const jwt = require("jsonwebtoken");

router.get("/login", (req, res) => {
  res.json({ msg: "login page" });
});

router.get("/logout", (req, res) => {
  res.json({ msg: "logout page" });
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

module.exports = router;
