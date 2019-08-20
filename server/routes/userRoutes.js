import express from 'express';
import validate from '../validations/userValidations';
import userControl from '../control/user_control';

const router = express.Router();

router.post('/signup',validate.validation,userControl.signupUser);
router.post('/signin', validate.signInValidation,userControl.signinUser);

export default router;
