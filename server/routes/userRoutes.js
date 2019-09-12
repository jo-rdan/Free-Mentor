import express from 'express';
import validate from '../validations/userValidations';
import userControl from '../controllers/user_controller';
import auth from '../middleware/authentication';
import sessions from '../controllers/sessionController';
import sessValidate from '../validations/sessionValidations';
import reviewValidation from '../validations/reviewValidation';
import userHelper from '../helpers/userServer';

const router = express.Router();

router.post('/signup',validate.validation,userHelper.signupHelper,userControl.signupUser);
router.post('/signin', validate.signInValidation,userHelper.signinHelper,userControl.signinUser);
router.get('/mentors', auth.authUser,userControl.getAllMentors);
router.get('/mentors/:mentorId', auth.authUser, userHelper.getOne, userControl.getMentor);
router.post('/sessions', sessValidate,auth.authSession,sessions.create);
router.patch('/sessions/:id/accept',auth.authAcceptRequest, sessions.acceptMentorship);
router.patch('/sessions/:id/reject',auth.authAcceptRequest, sessions.declineMentorship);
router.post('/sessions/:id/review', reviewValidation, auth.authReview, sessions.reviewMentor);

export default router;
