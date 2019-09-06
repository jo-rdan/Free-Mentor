import express from 'express';
import admin from '../controllers/adminControl';
import authent from '../middleware/authentication';

const router = express.Router();

router.patch('/user/:id', authent.auth, admin.changeUserToMentor);
router.delete('/sessions/:id/review', authent.auth, admin.deleteReview);

export default router;