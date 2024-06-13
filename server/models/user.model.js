import mongoose from "mongoose";
const {Schema, models, model} = mongoose

const userSchema = new Schema({
	type: {
		type: String,
        enum: ["student", "professional"],
		require: true,
	},
	email: {
		type: String,
		require: true
	},
	fullName: {
		type: String,
		require: true,
	},
	age: {
		type: Number,
		require: true,
	},
	gender: {
		type: String,
        enum: ["male", "female"],
		require: true,
	},
	password: {
		type: String,
		require: true,
	},
	description: {
		type: String,
	},
});

const User = models.User || model("User", userSchema);
export default User;