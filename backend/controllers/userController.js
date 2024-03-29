const User = require("../models/userModel");
const Book = require("../models/books");

const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const createToken = (_id) => {
	return jwt.sign({ _id }, process.env.SECRET);
};

// get all Users
const getUsers = async (req, res) => {
	const users = await User.find({}).sort({ createdAt: -1 });

	res.status(200).json(users);
};

// get a single User
const getUser = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such users" });
	}

	const user = await User.findById(id);

	if (!user) {
		return res.status(404).json({ error: "No such user id" });
	}

	res.status(200).json(user);
};

// get a single User with their Books
const getUserWithBooks = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "Invalid user ID" });
	}

	try {
		const user = await User.findById(id);

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		const books = await Book.find({ user: user._id });

		res.status(200).json({ user: user, books: books });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// login a user
const loginUser = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.login(email, password);

		// create a token
		const userId = user._id;
		const token = createToken(userId);

		res.status(200).json({ email, token, userId });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// signup a user
const signupUser = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.signup(email, password);

		// create a token
		const token = createToken(user._id);

		res.status(200).json({ email, token });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = { signupUser, loginUser, getUser, getUsers, getUserWithBooks };
