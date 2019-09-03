const express = require('express')
const Book = require('../models/Book')

const router = new express.Router()

router.get('/', (req, res) => {
    Book
      .find()
      .then(books => {
        res.status(200).json(books)
      })
  })

  module.exports= router;