let donationList = require('./donationList.json')
let donationModel = require('./donation')

donationList.forEach(async (hero) => {
    // console.log('Creating superhero:', hero.superheroName)
    let createdId = await donationModel.createDonation(donate)
    // console.log('... created with id', createdId)
})

