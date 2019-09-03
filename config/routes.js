const bookRoutes = require('../routes/book')
const booksRoutes = require('../routes/books')
const genresRoutes = require('../routes/genres')
const genreRoutes = require('../routes/genre')

module.exports = (app) => {
  app.use('/api/books', booksRoutes)
  app.use('/api/book', bookRoutes)
  app.use('/api/genre', genreRoutes)
  app.use('/api/genres', genresRoutes)
}