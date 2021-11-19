const mongoose = require('./mongooseDb')

const Superhero = mongoose.model('Superhero', 
    {
        "superheroName": String, 
        "alterEgo": String,
        "homeCity": String,
        "costume": String,
        "superpowers": [String], 
        "nemesis": String
    }
)

async function createSuperhero(superheroData) {
    let newSuperhero = new Superhero(superheroData)
    let createdSuperhero = await newSuperhero.save()
    return createdSuperhero.id
}

async function listSuperheros() {
    return Superhero.find({})
}

module.exports = {
    createSuperhero,
    listSuperheros
}