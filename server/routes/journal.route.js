import { Router } from "express";
import journalController from "../controllers/journal.controller.js";
const router = Router();

router.get('/', journalController.getJournals);
router.get('/:id',journalController.getSingleJournal);
router.post('/',journalController.postJournal);
router.patch('/:id',journalController.updateJournal);
router.delete('/:id',journalController.deleteJournal);

export default router;