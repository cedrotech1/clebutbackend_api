import { Router } from 'express';
import {
  createContactMessage,
  getAllContactMessages,
  getContactMessageById,
  updateContactMessage,
  deleteContactMessage,
} from '../controllers/contactMessages';

const router = Router();

router.post('/', createContactMessage);
router.get('/', getAllContactMessages);
router.get('/:id', getContactMessageById);
router.put('/:id', updateContactMessage);
router.delete('/:id', deleteContactMessage);

export default router;
