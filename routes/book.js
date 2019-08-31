const express = require('express')
const authCheck = require('../config/auth-check')
const Book = require('../models/Book')
const Genre = require('../models/Genre.js')

const router = new express.Router()



function validateBookCreateForm(payload) {

  const errors = {}
  let isFormValid = true
  let message = ''

  // payload.price = parseFloat(payload.price)

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

router.post('/edit/:id', authCheck, (req, res) => {
  if (req.user.roles.indexOf('Admin') > -1) {
    const bookId = req.params.id
    const bookObj = req.body
    const validationResult = validateBookCreateForm(bookObj)
    if (!validationResult.success) {
      return res.status(200).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      })
    }

    Book
      .findById(bookId)
      .then(existingBook => {
        existingBook.title = bookObj.title
        existingBook.author = bookObj.author
        existingBook.genres = bookObj.genres
        existingBook.description = bookObj.description
        existingBook.price = bookObj.price
        existingBook.image = bookObj.image

        existingBook
          .save()
          .then(editedBook => {
            res.status(200).json({
              success: true,
              message: 'Book edited successfully.',
              data: editedBook
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
      })
      .catch((err) => {
        console.log(err)
        const message = 'Something went wrong :( Check the form for errors.'
        return res.status(200).json({
          success: false,
          message: message
        })
      })
  } else {
    return res.status(200).json({
      success: false,
      message: 'Invalid credentials!'
    })
  }
})

router.get('/all', (req, res) => {
  Book
    .find()
    .then(books => {
      res.status(200).json(books)
    })
})

router.post('/review/:id', authCheck, (req, res) => {
  const id = req.params.id
  const review = req.body.review
  const username = req.user.username

  if (review.length < 4) {
    const message = 'Review must be at least 4 characters long.'
    return res.status(200).json({
      success: false,
      message: message
    })
  }

  Book
    .findById(id)
    .then(book => {
      if (!book) {
        return res.status(200).json({
          success: false,
          message: 'Product not found.'
        })
      }

      let reviewObj = {
        review,
        createdBy: username
      }

      let reviews = book.reviews
      reviews.push(reviewObj)
      book.reviews = reviews
      book
        .save()
        .then((book) => {
          res.status(200).json({
            success: true,
            message: 'Review added successfully.',
            data: book
          })
        })
        .catch((err) => {
          console.log(err)
          const message = 'Something went wrong :( Check the form for errors.'
          return res.status(200).json({
            success: false,
            message: message
          })
        })
    })
    .catch((err) => {
      console.log(err)
      const message = 'Something went wrong :( Check the form for errors.'
      return res.status(200).json({
        success: false,
        message: message
      })
    })
})





router.delete('/delete/:id', authCheck, (req, res) => {
  const id = req.params.id
  if (req.user.roles.indexOf('Admin') > -1) {
    Book
      .findById(id)
      .then((book) => {
        book
          .remove()
          .then(() => {
            return res.status(200).json({
              success: true,
              message: 'Book deleted successfully!'
            })
          })
      })
      .catch(() => {
        return res.status(200).json({
          success: false,
          message: 'Entry does not exist!'
        })
      })
  } else {
    return res.status(200).json({
      success: false,
      message: 'Invalid credentials!'
    })
  }
})

module.exports = router
