const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  book_id: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  amount: { type: Number, required: true },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
