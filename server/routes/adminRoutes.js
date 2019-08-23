import express from 'express';
import admin from '../control/adminControl';
import authent from '../middleware/authentication';

const router = express.Router();

router.patch('/user/:id', authent.auth, admin.changeUserToMentor);

export default router;