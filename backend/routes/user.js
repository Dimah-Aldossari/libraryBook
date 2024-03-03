const express = require('express')

// controller functions
const { loginUser, signupUser, getUser, getUsers, getUserWithBooks } = require('../controllers/userController')

const router = express.Router()


// GET all Users
router.get('/', getUsers)

// GET a single User
router.get('/:id', getUser)
//GET User With Book
router.get('/users/:id', getUserWithBooks);

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

module.exports = router