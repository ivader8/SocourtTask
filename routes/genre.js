const express = require('express')
const Genre = require('../models/Genre')

const router = new express.Router()

router.get ('/:id', (req,res)=>{
    const genreId = req.params.id;
    
     
    const findGenreInfo =  (() => {
     return Genre.findById(genreId)
      .then(existingGenre =>{
        res.status(200).json({
          success: true,
          message: 'Genre info retrieved successfully.',
          data: existingGenre
        })
      })
    })();
  })

  module.exports= router;