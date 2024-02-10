const express = require('express')
const router = express.Router();
const BookController = require('../controller/bookController')

router.route('/book')
.post(BookController.saveBook)

router.route('/getBook')
.get(BookController.getBook)

router.route('/getBook/:id')
.get(BookController.getSelectBook)

router.route('/updateBook/:id')
.put(BookController.updateBook)

router.route('/deleteBook/:id')
.delete(BookController.deleteBook)


module.exports =router;
