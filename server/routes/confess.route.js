import { Router } from "express";
const router = new Router();

import confessController from "../controllers/confess.controller.js";

router.get('/', confessController.getConfessions);
router.get('/:id', confessController.getConfession);
router.post('/', confessController.postConfession);
router.patch("/:id", confessController.updateConfessions);
router.delete("/:id", confessController.deleteConfessions);

export default router;