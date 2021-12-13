const express = require('express')
const app = express()
const User = require('./models/user')
const cors = require("cors")


app.use(express.json())
app.use(cors())

app.post('api/register', async (req, res) => {
    try {
        await User.create({
            username: req.body.values.username,
            email: req.body.values.email,
            password: req.body.values.password
        })
        res.json({ status: 'ok' })
    } catch (err) {
        res.json({ status: 'error', error: "Invalid email or password" })
    }
})

app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        email: req.body.values.email,
        password: req.body.values.password,
    })

    if (user) {
        return res.json({ status: 'ok', user: true })
    } else {
        return res.json({ status: 'error', user: false })
    }
})

app.listen(5000, () => {
    console.log('Server started on', 5000)
})