var models = require('./models')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const routes = require('./routes')
app.use(bodyParser.json())
app.use(cors())
models.sequelize.sync().then(function () {
  app.use('/', routes)
  process.env.PORT = process.env.PORT || 3000
  app.listen(process.env.PORT, () =>
    console.log(`API RODANDO NA PORTA: ${process.env.PORT}`)
  )
})
