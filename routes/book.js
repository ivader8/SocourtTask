const express = require('express')
const Book = require('../models/Book')
const Genre = require('../models/Genre.js')

const router = new express.Router()



function validateBookCreateForm(payload) {

  const errors = {}
  let isFormValid = true
  let message = ''


  if (!payload || typeof payload.title !== 'string' || payload.title.length < 2) {
    isFormValid = false
    errors.title = 'Book name must be at least 2 symbols.'
  }

  if (!payload || typeof payload.genre !== 'string' || payload.genre.length < 5 || payload.genre.length > 20) {
    isFormValid = false
    errors.genre = 'Genre must be at least 5 symbols and no more than 20 symbols.'
  }
  if (!payload || typeof payload.author !== 'string' || payload.genre.author < 2) {
    isFormValid = false
    errors.author = 'Author must be at least 2 symbols.'
  }

  if (!isFormValid) {
    message = 'Check the form for errors.'
  }

  return {
    success: isFormValid,
    message,
    errors
  }
}

router.post('/create', (req, res) => {
  const bookObj = req.body
  const validationResult = validateBookCreateForm(bookObj)
  if (!validationResult.success) {
    return res.status(200).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  if (validationResult.success) {

    console.log('successs')
    console.log(bookObj)

    Book
      .create(bookObj)
      .then((createdBook) => {
        res.status(200).json({
          success: true,
          message: 'Book added successfully.',
          data: createdBook
        })
      })
      .catch((err) => {
        console.log(err)
        let message = 'Something went wrong :( Check the form for errors.'
        if (err.code === 11000) {
          message = 'Book with the given name already exists.'
        }
        return res.status(200).json({
          success: false,
          message: message
        })
      })

    const findGenre = (async () => {

      try {
        let genre = await Genre.findOne({
          name: bookObj.genre
        });

        let genreName = bookObj.genre;
        let genreBook = bookObj.title;

        if (!genre) {
                    //TODO get bookID and create for it 
          let genre = await Genre.create({
            name: genreName, books: [genreBook]

          })
        } else {
          //add book title to array
          await Genre.findOneAndUpdate({name:genreName},{$push:{books:genreBook}})
        }

      } catch (error) {
        console.log(error)
      }
    }
    )()

  }
})

router.get ('/:id', (req,res)=>{
  const bookId = req.params.id;
  const genreBook='';
  const titleBook='';
  let dateCreatedBook ;
   
  const findBookInfo =  (() => {
   return Book.findById(bookId)
    .then(existingBook =>{
      res.status(200).json({
        success: true,
        message: 'Book info retrieved successfully.',
        data: existingBook
      })
    })
  })();
})

module.exports = router;
