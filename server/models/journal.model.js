import mongoose from "mongoose";
const {Schema, models, model, Types} = mongoose

const JournalSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        ref: "User",
    },
	description: {
		type: String,
        require: true
	},
});

const Journal = models.Journal || model("Journal", JournalSchema);
export default Journal;