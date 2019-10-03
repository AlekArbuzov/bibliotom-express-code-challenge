const jsend = require('jsend');
const Book = require('../../models/Book/book.model');

/**
 * @api {get} /books
 * @apiGroup Books
 * @apiDescription Get books list
 * @apiHeader Authorization Bearer <token>
 *
 * @apiSuccess {Array} - Books list
 */
module.exports.list = async (req, res) => {
  try {
    const { institutionId } = req.user;
    const books = await Book.findAll({ where: { institutionId } });
    return res.status(200).send(jsend.success({ books }));
  } catch (error) {
    return res.status(500).send(jsend.error(error))
  }
};
