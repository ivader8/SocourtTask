const authRoutes = require('../routes/auth')
const bookRoutes = require('../routes/book')
const statsRoutes = require('../routes/stats')
const ordersRoutes = require('../routes/order')

module.exports = (app) => {
  app.use('api/auth', authRoutes)
  app.use('api/books', bookRoutes)
  app.use('/api/book', bookRoutes)
  app.use('api/genre', ordersRoutes)
  app.use('api/genres', ordersRoutes)
}
