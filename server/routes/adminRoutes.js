import express from 'express';
import admin from '../controllers/adminController';
import authent from '../middleware/authentication';
import adminHelp from '../helpers/userServer';

const router = express.Router();

router.patch('/user/:id', authent.auth, adminHelp.adminHelper,admin.changeUserToMentor); 
router.delete('/sessions/:id/review', authent.auth, admin.deleteReview);

export default router;