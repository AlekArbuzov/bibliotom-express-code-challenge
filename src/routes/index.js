/**
* Routes
* */

const userRoutes = require('../controllers/users/user.routes');
const bookRoutes = require('../controllers/books/book.routes');

module.exports = (app) => {
  app.use('/users', userRoutes);
  app.use('/books', bookRoutes);
};
