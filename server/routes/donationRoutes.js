const express = require("express");
const router = express.Router();

const donationModel = require("../models/donation");

router.get("/donation", async (req, res) => {
  console.log ("reached this endpoint")
  let donationList = await donationModel.listDonations();
  res.send(donationList);
});

router.get("/donation/:id", async (req, res) => {
  let id = req.params.id;
  let donation = await donationModel.findById(id);
  res.send(donation);
});

router.post("/donationForm", async (req, res) => {
  let newDonation = req.body;
  let createdId = await donationModel.createDonation(newDonation);
  res.send(createdId);
});

module.exports = router;
