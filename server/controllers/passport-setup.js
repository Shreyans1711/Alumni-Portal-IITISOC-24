const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../keys");
const User = require("../models/user-model");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: "http://localhost:3000/auth/google/redirect",
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          done(null, currentUser);
        } else {
          let role = "user";
          let email = profile.emails[0].value;
          if (email == "abhi2004iiti@gmail.com") {
            role = "admin";
          }

          if (email == "abhiap2004@gmail.com") {
            role = "alumni";
          }

          if (email.includes("@iiti.ac.in")) {
            var emailnum = "20";

            for (var i = 0; i < email.length; i++) {
              console.log(email[i]);
              if (email[i] == "2") {
                console.log(email[i]);
                emailnum = emailnum + email[i];
                emailnum = emailnum + email[i];
                break;
              }
              if (email[i] == "1") {
                console.log(email[i]);
                emailnum = emailnum + email[i];
                emailnum = emailnum + email[i];
                break;
              }
              if (email[i] == "0") {
                console.log(email[i]);
                emailnum = emailnum + email[i];
                emailnum = emailnum + email[i];
                break;
              }
            }
            console.log(emailnum);
            var currentyear = new Date().getFullYear();
            console.log(currentyear);
            emailnum = parseInt(emailnum);
            var diff = currentyear - emailnum;
            console.log(diff);
            if (diff > 4) {
              role = "alumni";
            }
          }

          new User({
            googleId: profile.id,
            email: profile.emails[0].value,
            imgurl: profile.photos[0].value,
            username: profile.displayName,
            role: role,
          })
            .save()
            .then((newUser) => {
              done(null, newUser);
            });
        }
      });
    }
  )
);
