import express from 'express';
import validate from '../validations/userValidations';
import userControl from '../control/user_control';
import auth from '../middleware/authentication';
import sessions from '../control/sessionControl';
import sessValidate from '../validations/sessionValidations';
import reviewValidation from '../validations/reviewValidation';

const router = express.Router();

router.post('/signup',validate.validation,userControl.signupUser);
router.post('/signin', validate.signInValidation,userControl.signinUser);
router.get('/mentors', auth.authUser,userControl.getAllMentors);
router.get('/mentors/:mentorId', auth.authUser,userControl.getMentor);
router.post('/sessions', sessValidate,auth.authSession,sessions.create);
router.patch('/sessions/:id/accept',auth.authAcceptRequest, sessions.acceptMentorship);
router.patch('/sessions/:id/reject',auth.authAcceptRequest, sessions.declineMentorship);
router.post('/sessions/:id/review', reviewValidation, auth.authReview, sessions.reviewMentor);

export default router;
