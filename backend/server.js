
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

const app = express()
app.use(cors());

const booksRoutes = require("./routes/books")
const userRoutes = require('./routes/user')

require('dotenv').config();

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/books', booksRoutes)
app.use('/api/user', userRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected to database')
        // listen to port
        app.listen(process.env.PORT, () => {
            console.log('listening for requests on port', process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    }) 