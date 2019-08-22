import express from 'express';
import validate from '../validations/userValidations';
import userControl from '../control/user_control';
import auth from '../middleware/authentication';

const router = express.Router();

router.post('/signup',validate.validation,userControl.signupUser);
router.post('/signin', validate.signInValidation,userControl.signinUser);
router.get('/mentors', auth.authUser,userControl.getAllMentors);

export default router;
