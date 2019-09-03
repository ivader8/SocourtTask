const express = require('express')
const Genre = require('../models/Genre.js')

const router = new express.Router()

router.get('/', (req, res) => {
    Genre
      .find()
      .then(genres => {
        res.status(200).json(genres)
      })
  })

  module.exports= router;