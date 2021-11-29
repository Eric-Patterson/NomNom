const mongoose = require('mongoose')

const dbUrl = 'mongodb://localhost:27017/c7DonationInventory'
mongoose.connect(dbUrl)

module.exports = mongoose
