const express = require('express')
const superheroRoutes = require('./routes/superheroRoutes')

const app = express()
const port = 5000

app.use('/api',superheroRoutes)
app.use('/', express.static('../client/build'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

