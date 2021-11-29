
const express = require('express')
const router = express.Router()

// const superheroModel = require('../models/superhero')

const donationModel = require ('../models/donations')

// router.get('/superhero', async (req, res) => {
//     let superheroList = await superheroModel.listSuperheros()
//     res.send(superheroList)
// })

// router.get('/superhero/:id', async (req, res) => {
//     let id =req.params.id
//     let superhero = await superheroModel.findById(id)
//     res.send(superhero)
// })

router.post('/donationForm', async (req, res) => {
    let newDonation = req.body
    let createdId = await donationModel.createDonation(newDonation)
    res.send(createdId)
})


module.exports = router
