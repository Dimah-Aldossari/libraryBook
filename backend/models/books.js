const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true }
);

// bookSchema.pre("findOneAndDelete", async function (next) {
//     const book = await this.model.findOne(this.getFilter());
//     const user = await this.model.model("User").findById(book.user);
//     user.userBook.pull(book);
//     await user.save();

//     next();
// });

module.exports = mongoose.model("Book", bookSchema);
