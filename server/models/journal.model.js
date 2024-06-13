import mongoose from "mongoose";
const {Schema, models, model, Types} = mongoose

const JournalSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        ref: "User",
        required: true,
    },
	description: {
		type: String,
        required: true,
        maxLength: 1500
	},
}, { timestamps: true });

const Journal = models.Journal || model("Journal", JournalSchema);
export default Journal;