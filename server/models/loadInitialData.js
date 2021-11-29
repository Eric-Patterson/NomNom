let donationList = require("./donationList.json");
let donationModel = require("./donation");

donationList.forEach(async (donation) => {
  console.log("Creating superhero:", donation.foodType);
  let createdId = await donationModel.createDonation(donation);
  console.log("... created with id", createdId);
});
