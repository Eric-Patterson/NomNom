// propduction code. uncomment when uploading to server
// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

const express = require("express");
const app = express();
const port = 5000;
// const mongoose = require("mongoose");
const User = require("./models/users");
const session = require("express-session");
// const MongoStore = require("connect-mongo");
const passport = require("passport");
const LocalStrategy = require("passport-local");
// ------------------- Requires -------------------

// Routes
// const userRoutes = require("./routes/user");
const donationRoutes = require("./routes/donationRoutes");

// // sessions config
// const sessionConfig = {
//   store, // store will now use mongo to store our information
//   name: "session",
//   secret,
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//     httpOnly: true,
//     // secure: true, //this cookie should only work over https
//     // 1000 * 60 * 60 * 24 * 7 || 1000 miliseconds in a second, 60 seconds in a minute, 60 minutes in an hour, 24 hours in a day, 7 days a week
//     expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
//     maxAge: 1000 * 60 * 60 * 24 * 7,
//   },
//   // currentpage: parseurl(req).pathname,
// };

// const dbUrl =
//   process.env.DB_URL || "mongodb://localhost:27017/c7DonationInventory";

// const store = MongoStore.create({
//   mongoUrl: dbUrl,
//   secret,
//   touchAfter: 24 * 60 * 60, //24 hours * 60 minutes * 60 seconds
// });

// store.on("error", function (e) {
//   console.log("Session store error, e");
// });

// mongoose.connect(dbUrl, {
//   useNewUrlParser: true,
//   //   useCreateIndex: true,
//   useUnifiedTopology: true,
//   //   useFindAndModify: false,
// });

// confirms database is connected
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//   console.log("Database connected");
// });

// Middleware
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use(express.urlencoded({ extended: true }));
// app.use(session(sessionConfig));

app.use(express.json());
app.use("/api", donationRoutes);
app.use("/", express.static("../client/build"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
