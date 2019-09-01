const express = require('express')
const authCheck = require('../config/auth-check')
const Book = require('../models/Book')
const Genre = require('../models/Genre.js')

const router = new express.Router()

router.get('/', (req, res) => {
    Book
      .find()
      .then(books => {
        res.status(200).json(books)
      })
  })

  module.exports= router;