const express = require('express')
const {
    getBooks,
    getBook,
    createBook,
    deleteBook,
    updateBook,
} = require('../controllers/bookControllers')
const router = express.Router()
// GET all workouts
router.get('/', getBooks)

// GET a single workout
router.get('/:id', getBook)


// POST a new book
router.post('/', createBook)

// DELETE a book
router.delete('/:id', deleteBook)

// UPDATE a book
router.patch('/:id', updateBook)

module.exports = router