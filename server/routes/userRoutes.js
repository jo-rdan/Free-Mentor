import express from 'express';
import validate from '../validations/userValidations';
import userControl from '../controllers/user_controller';
import auth from '../middleware/authentication';
import sessions from '../controllers/sessionController';
import sessValidate from '../validations/sessionValidations';
import userHelper from '../helpers/userServer';
import sessionHelp from '../helpers/sessionServer';
import decline from '../helpers/declineReq';

const router = express.Router();

router.post('/signup',validate.validation,userHelper.signupHelper,userControl.signupUser);
router.post('/signin', validate.signInValidation,userHelper.signinHelper,userControl.signinUser);
router.get('/mentors', auth.authUser,userControl.getAllMentors);
router.get('/mentors/:mentorId', auth.authUser, userHelper.getOne, userControl.getMentor);
router.post('/sessions', sessValidate,auth.authSession,sessionHelp.sessionHelper, sessions.create);
router.patch('/sessions/:id/accept', auth.authAcceptRequest, sessionHelp.acceptHelper, sessions.acceptMentorship);
router.patch('/sessions/:id/reject',auth.authAcceptRequest, decline,sessions.declineMentorship);
export default router;
