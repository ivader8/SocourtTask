const mongoose = require('mongoose')

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let genreSchema = mongoose.Schema({
  // creator: {type: mongoose.Schema.Types.ObjectId, required: REQUIRED_VALIDATION_MESSAGE},
  name: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE},
 
  dataCreated: {type: mongoose.Schema.Types.Date, default: new Date()},
  lastUpdated: {type: mongoose.Schema.Types.Date, required: REQUIRED_VALIDATION_MESSAGE},
 
  // date: {
  //   // type: mongoose.Schema.Types.Date, required: REQUIRED_VALIDATION_MESSAGE, 
  //   type: mongoose.Schema.Types.Date, default: Date.now},
  
  // // status: {
  // //   type: mongoose.Schema.Types.String,
  // //   enum: {
  // //     values: ['Pending', 'Approved', 'Delivered'],
  // //     message: 'Status is invalid, valid values include [Pending, Approved, Delivered].'
  // //   },
  //   // default: 'Pending'
  //   // required: REQUIRED_VALIDATION_MESSAGE
  // // }
})

let Genre = mongoose.model('Genre', genreSchema)

module.exports = Genre
