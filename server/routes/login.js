const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");
const cookieParser = require("cookie-parser");

router.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
router.use(cookieParser("secret"));
router.use(passport.initialize());
router.use(passport.session());
require("../passportConfig")(passport);

// router.get("/reset", (req, res) => {
//   // res.send("session destroyed", session);
//   res.json({ status: "session destroyed" });
//   req.session.destroy(function (err) {
//     // cannot access session here
//   });
// });

router.post("/register", async (req, res) => {
  console.log("in reigster", req);
  try {
    const hashedPassword = await bcrypt.hash(req.body.values.password, 10);
    await User.create({
      username: req.body.values.username,
      email: req.body.values.email,
      password: hashedPassword,
    });
    console.log("hashed pw", hashedPassword);
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Invalid email or password" });
  }
});

router.post("/login", (req, res, next) => {
  // console.log("LOGIN REQUEST", req)
  // let user1 = req.body
  passport.authenticate("local", (err, user, info) => {
    console.log("USEEEEER", user, "INFO", info);
    if (err) throw err;
    if (!user) res.send("No user exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully authenticated");
        console.log("here is user", req.user);
      });
    }
  })(req, res, next);
});

module.exports = router;
