const mongoose = require("mongoose");

const DonationSchema = mongoose.model("DonationInventory", {
  foodType: String,
  numberOfServings: Number,
  radio: String,
  cookingInstructions: String,
  disclaimer: String,
  ingredients: [String],
  agree: Boolean,
  ingredients: String,
  agree: Boolean,
  date: Date,
});

async function createDonation(donationData) {
  let newDonation = new DonationSchema(donationData);
  let createdDonation = await newDonation.save();
  return createdDonation.id;
}

async function listDonations() {
  return DonationSchema.find({});
}

async function findById(id) {
  return DonationSchema.findById(id);
}

async function deleteDonation(id) {
  return DonationSchema.findByIdAndDelete(id);
}

module.exports = {
  deleteDonation,
  createDonation,
  listDonations,
  findById,
};
