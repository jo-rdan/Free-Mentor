/* eslint-disable */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import users from '../classes/userServer';

dotenv.config();

class Authenticate {
  static auth(req, res, next) {
    try {
      const headers = req.header('x-token');
      if (headers) {
        const payload = jwt.verify(headers, process.env.secret);
        if (payload.isAdmin === true) {
          req.payload = payload;
          next();
        } else {
          return res.status(403).send({ status: { Integer: 403 }, error: { message: 'You are not allowed to perform this action' } });
        }
      } else {
        return res.status(401).send({ status: { Integer: 401 }, error: { message: 'Access Denied' } });
      }
    } catch (error) {
      return res.status(401).send({ status: { Integer: 401 }, error: { message: error.message } })
    }
  }

  static authUser(req, res, next) {
    try {
      const tkens = req.header('x-token');
      if (tkens) {
        req.payload = jwt.verify(tkens, process.env.secret);
        next();
      } else return res.status(401).send({ status: { Integer: 401 }, error: 'Unauthorized user' });
    } catch (error) {
      return res.status(401).send({ status: { Integer: 401 }, error: error.message });
    }
  }

  static authSession(req, res, next) {
    try {
      const tokens = req.header('x-token');
      if (tokens) {
        const payload = jwt.verify(tokens, process.env.secret);
        const isUser = users.findByEmail(req.body.mentorEmail);
        if (isUser) {
          if (payload.isAdmin === false) {
            if (payload.email !== isUser.email) {
              req.payload = payload;
              next();
            } else return res.status(403).send({ status: { Integer: 403 }, error: 'You are not allowed to create a mentorship request' });
          } else return res.status(403).send({ status: { Integer: 403 }, error: 'Admin cannot create a mentorship request' });
        } else {
          return res.status(401).send({ status: { Integer: 401 }, error: 'Unauthorized user' });
        }
      } else {
        return res.status(401).send({ status: { Integer: 401 }, error: 'Unauthorized user' });
      }

    } catch (error) {
      return res.status(401).send({ status: { Integer: 401 }, error: error.message });
    }
  }
}

export default Authenticate;