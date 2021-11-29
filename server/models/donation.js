const mongoose = require('./mongooseDb')

const donationInventory = mongoose.model('donationInventory', 
    {
        "foodType": String, 
        "numberOfServings": Number,
        "cookingInstructions": String,
        "ingredients": [String],
        "disclaimer": String,
        "dateAndTime": String,
        "termsAndConditions": Boolean
    }
)

async function createDonation(donationData) {
    let newDonation = new donationInventory(donationData)
    let createdDonation = await newDonation.save()
    return createdDonation.id
}

async function listDonations() {
    return donationInventory.find({})
}

async function findById(id) {
    return donationInventory.findById(id)
}

module.exports = {
    createDonation,
    listDonations,
    findById
}