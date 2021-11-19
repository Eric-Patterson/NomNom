
const express = require('express')
const router = express.Router()

const superheroModel = require('../models/superhero')

router.get('/superhero', async (req, res) => {
    let superheroList = await superheroModel.listSuperheros()
    res.send(superheroList)
})


module.exports = router
