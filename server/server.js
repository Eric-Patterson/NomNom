// propduction code. uncomment when uploading to server
// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

const express = require("express");
const donationRoutes = require("./routes/donationRoutes");

// passport
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");

// sessions
const session = require("express-session");

const app = express();
const port = 5000;

app.use(express.json());

app.use("/api", donationRoutes);
app.use("/", express.static("../client/build"));

// ========== Work in progress code ==============

// passport middleware
passport.use(new LocalStrategy(User.authenticate()));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ========================= logged in middleware ======================
// User logged in??
app.use((req, res, next) => {
  // we will have access to all these in all templates
  // currentUser will be used to hide/show stuff when logged in or not
  res.locals.currentUser = req.user;
  next();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
