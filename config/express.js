//configuring express 

const bodyParser = require('body-parser')

const cors = require('cors')

module.exports = (app) => {
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(cors())
  console.log('Express ready!')
}
