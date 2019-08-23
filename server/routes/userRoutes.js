import express from 'express';
import validate from '../validations/userValidations';
import userControl from '../control/user_control';
import auth from '../middleware/authentication';
import sessions from '../control/sessionControl';
import sessValidate from '../validations/sessionValidations';
const router = express.Router();

router.post('/signup',validate.validation,userControl.signupUser);
router.post('/signin', validate.signInValidation,userControl.signinUser);
router.get('/mentors', auth.authUser,userControl.getAllMentors);
router.get('/mentors/:mentorId', auth.authUser,userControl.getMentor);
router.post('/sessions', sessValidate,auth.authSession,sessions.create);

export default router;
