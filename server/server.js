// propduction code. uncomment when uploading to server
// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

const express = require("express");
const donationRoutes = require("./routes/donationRoutes");
const loginRoutes = require("./routes/login")
const cors = require("cors")
const app = express();
const port = 5000;
app.use(cors())
app.use(express.json());

app.use("/api", donationRoutes);
app.use("/api", loginRoutes)
app.use("/", express.static("../client/build"));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
