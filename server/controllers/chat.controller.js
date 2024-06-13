// prolly, we'll do this from socket.
import generateText from "../config/genaiConfig.js";
import { Conversation, Message } from "../models/chat.model.js";

const chatController = {
    getConversation: async (req, res) => {
        const userId = req.userId;

        try {
            const conversation = await Conversation.findOne({
                userId
            })
            if (!conversation) {
                res.status(200).json({ message: "No Conversation found" })
            }
            const conversationMessageId = conversation?.messages || [];
            const messages = await Message.find({
                _id: { $in: conversationMessageId },
            });

            console.log(messages)

            res.status(200).json({ data: messages });

        } catch (error) {
            res.status(500).json({ message: "Internal Server Error Occured!" })
        }
    },
    sendMsg: async (req, res) => {
        const userId = req.userId;

        try {
            const { prompt } = req.body;
            // console.log(prompt)

            let conversation = await Conversation.findOne({
                userId
            });
            if (!conversation) {
                conversation = new Conversation.create({
                    userId,
                });
            }
            // const aiResponse = await generateText(question);
            // console.log(aiResponse);
            const aiResponse = "I am currently unavailable";

            const userMessage = new Message({
                text: prompt,
                senderId: userId,
            });
            const savedUserMessage = await userMessage.save();

            const aiMessage = new Message({
                text: aiResponse,
            });
            const savedAiMessage = await aiMessage.save();

            // const updateConversation = await Conversation.updateOne(
            // 	{_id: conversation._id},
            // 	{$push: {messages: saveMessage._id}}
            // );

            const updateConversation = await Conversation.updateOne(
                { _id: conversation._id },
                {
                    $push: {
                        messages: {
                            $each: [savedUserMessage._id, savedAiMessage._id]
                        }
                    }
                }
            );

            res.status(200).json({ messages: [savedUserMessage, savedAiMessage] })

        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error.message });
        }

    },
}

export default chatController