import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import users from './usersSignup';
import signin from './userSignin';

dotenv.config();

const newUserToken = jwt.sign({ id: 3, email: users[0].email, isAdmin: false }, process.env.secret, { expiresIn: '1h' });
const newMentorToken = jwt.sign({ id: 1, email: signin[1].email, isAdmin: false }, process.env.secret, { expiresIn: '1h' });
const newAdminToken = jwt.sign({ id: 1, email: signin[0].email, isAdmin: true }, process.env.secret, { expiresIn: '1h' });
const newReviewToken = jwt.sign({ id: 1, email: users[19].email, isAdmin: false }, process.env.secret, { expiresIn: '1h' });
const tokens = {

  admin: {
    real: newAdminToken,
    fake: 'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb3JkYW5rYXlpbmFtdXJhQGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU2NzcxOTcxN30.Lh4XQGNFU4fUjrGN7jiJ6QttN5UMsdLB3sRidVg4Cxs',
  },

  mentee: {
    real: newUserToken,
    fake: 'eJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJrYXlpbmFtdXJhQGdtYWlsLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE1Njc3MTk2NTl9.uiNuQegaNc7W6KC7TUfJSEobeRGX9dFBY1Ik0t-JAjI',
  },

  mentor: {
    real: newMentorToken,
    fake:
    'eJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huZG9lQGdtYWlsLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE1Njc3MTk3NDF9.x3XXboYFbAJBytegCJDqPcWOIy2C4i_Uwa-gMSbQVDo',
  },
  review: {
    real: newReviewToken,
  }
};
export default tokens;
