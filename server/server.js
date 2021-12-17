// propduction code. uncomment when uploading to server
// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
// const User = require("./models/users");
// const session = require("express-session");
// const MongoStore = require("connect-mongo");
// const passport = require("passport");
// const LocalStrategy = require("passport-local");
// ------------------- Requires -------------------

// const dbUrl = process.env.DB_URL;
const dbUrl =
  process.env.DB_URL || "mongodb://localhost:27017/c7DonationInventory";
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// const dbUrl =
//   process.env.DB_URL || "mongodb://localhost:27017/c7DonationInventory";
// mongoose.connect(dbUrl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const donationRoutes = require("./routes/donationRoutes");

app.use("/api", donationRoutes);
app.use("/", express.static("../client/build"));
app.use(express.json());

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
