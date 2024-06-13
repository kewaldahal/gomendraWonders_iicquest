import { Router } from "express";
import journalController from "../controllers/journal.controller.js";
import fetchuser from "../middleware/fetchUser.js";
const router = Router();

router.get('/',fetchuser, journalController.getJournals);
router.get('/:id',journalController.getSingleJournal);
router.post('/',journalController.postJournal);
router.patch('/:id',journalController.updateJournal);
router.delete('/:id',journalController.deleteJournal);

export default router;