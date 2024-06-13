import { Router } from "express";
const router = new Router();
import fetchuser from "../middleware/fetchUser.js"
import chatController from "../controllers/chat.controller.js";

router.get('/', fetchuser ,chatController.getConversation);
router.post('/', fetchuser, chatController.sendMsg);

export default router;