const express = require('express')
const app = express()
const mongoose = require('mongoose')
const User = require('./models/user')

const port = 5000

app.use(express.json())

mongoose.connect('mongodb://localhost:', port, '/login')

app.post('api/register', async (req, res) => {
    try {
        await User.create({
            // username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        res.json({ status: 'ok' })
    } catch (err) {
        res.json({ status: 'error', error: "Invalid email or password" })
    }
})

app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    })

    if (user) {
        return res.json({ status: 'ok', user: true })
    } else {
        return res.json({ status: 'error', user: false })
    }
})

app.listen(port, () => {
    console.log('Server started on', port)
})