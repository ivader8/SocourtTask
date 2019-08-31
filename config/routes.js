const authRoutes = require('../routes/auth')
const bookRoutes = require('../routes/book')
const booksRoutes = require('../routes/books')
const statsRoutes = require('../routes/stats')
const ordersRoutes = require('../routes/order')

module.exports = (app) => {
  app.use('api/auth', authRoutes)
  app.use('/api/books', booksRoutes)
  app.use('/api/book', bookRoutes)
  app.use('api/genre', ordersRoutes)
  app.use('api/genres', ordersRoutes)
}
