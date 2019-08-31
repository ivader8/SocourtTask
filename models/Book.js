const mongoose = require('mongoose')

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'


let bookSchema = new mongoose.Schema({
  title: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE, unique: [true, 'Book already exists.']},
  genre: {type: mongoose.Schema.Types.String, ref:"Genre", required: REQUIRED_VALIDATION_MESSAGE,},
  author: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE,},
  dataCreated: {type: mongoose.Schema.Types.Date, default: new Date()},
  lastUpdated: {type: mongoose.Schema.Types.Date, default: new Date()}
})

let Book = mongoose.model('Book', bookSchema)

module.exports = Book