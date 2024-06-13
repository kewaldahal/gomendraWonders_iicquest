import mongoose from "mongoose";
const {Schema, model, models, Types} = mongoose;

const messageSchema = new Schema(
	{
		text: {
			type: String,
			default: "",
			require: true
		},
		senderId: {
			type: Types.ObjectId,
			ref: "User",
		},
	},
	{timestamps: true}
);

const conversationSchema = new Schema(
	{
		userId: {
			type: Types.ObjectId,
			required: true,
			ref: "User",
		},
		messages: [
			{
				type: Types.ObjectId,
				ref: "Message",
			},
		],
	},
	{timestamps: true}
);

conversationSchema.index({ sender: 1, receiver: 1 }); // indexing uses b-tree and search operation is O(logn)

const Message = models.Message || model("Message", messageSchema);
const Conversation =
	models.Conversation || model("Conversation", conversationSchema);

export {Message, Conversation};