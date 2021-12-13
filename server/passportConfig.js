const User = require("./models/user");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    //defining local strategy for authentication, email = req.body.email, password = req.body.password, done is a callback
    new LocalStrategy(
      { usernameField: "username", passwordField: "password" },
      function (username, password, done) {
        console.log("here is pw and name", username, password, done);
        User.findOne({ username: username }, (err, user) => {
          if (err) throw err;
          if (!user) return done(null, false); // if there is no user and no error
          bcrypt.compare(password, user.password, (err, result) => {
            if (err) throw err;
            if (result === true) {
              return done(null, user);
            } else {
              return done(null, false);
            }
          });
        });
      }
    )
  );
  //stores a cookie , take a user from local strategy and create a cookie with id inside of it
  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  //takes a cookie, unravels it and gets a user out of it
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      cb(err, user);
    });
  });
};
