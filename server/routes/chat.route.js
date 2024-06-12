import { Router } from "express";
const router = new Router();

import chatController from "../controllers/chat.controller.js";

router.get('/', chatController.getConversation);
router.post('/', chatController.sendMsg);

export default router;