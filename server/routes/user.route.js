import { Router } from "express";
import authController from '../controllers/user.controller.js';
import fetchuser from "../middleware/fetchUser.js";
const router = Router();

router.get("/", fetchuser, authController.getUser);
router.post("/signup", authController.signUpUser);
router.post("/login", authController.loginUser);
router.get("/logout",fetchuser, authController.logOutUser);

export default router;