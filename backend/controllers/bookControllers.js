const Book = require("../models/books")
const User = require("../models/userModel")

const mongoose = require('mongoose')

// get all workouts
const getBooks = async (req, res) => {
    const books = await Book.find({}).sort({ createdAt: -1 })

    res.status(200).json(books)
}

// get a single workout
const getBook = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such book' })
    }

    const book = await Book.findById(id)

    if (!book) {
        return res.status(404).json({ error: 'No such book' })
    }

    res.status(200).json(book)
}

// create a new workout
const createBook = async (req, res) => {
    const { title, image, description, userId } = req.body
    let emptyFields = []

    if (!title) {
        emptyFields.push('title')
    }
    if (!image) {
        emptyFields.push('image')
    }
    if (!description) {
        emptyFields.push('description')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }
    try {
        const book = await Book.create({ title, image, description, userId })
        res.status(200).json(book)

    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a workout
const deleteBook = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such workout' })
    }

    const book = await Book.findOneAndDelete({ _id: id })

    if (!book) {
        return res.status(400).json({ error: 'No such workout' })
    }

    res.status(200).json(book)
}

// update a workout
const updateBook = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such workout' })
    }

    const book = await Book.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!book) {
        return res.status(400).json({ error: 'No such workout' })
    }

    res.status(200).json(book)
}
module.exports = {
    getBooks,
    getBook,
    createBook,
    deleteBook,
    updateBook,
}