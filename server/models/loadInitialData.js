let donationList = require('./donationList.json')
let donationModel = require('./donation')

donationList.forEach(async (donation) => {
    // console.log('Creating superhero:', hero.superheroName)
    let createdId = await donationModel.createDonation(donation)
    // console.log('... created with id', createdId)
})

