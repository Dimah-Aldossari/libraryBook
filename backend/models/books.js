const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    creater: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
}, { timestamps: true })

module.exports = mongoose.model('Book', bookSchema)