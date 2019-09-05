/* eslint-disable */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import users from '../classes/userServer';
import user from '../models/users';
import sessions from '../models/sessionsReq';

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
          return res.status(403).send({ status: 403, error: 'You are not allowed to perform this action' });
        }
      } else {
        return res.status(401).send({ status: 401, error: 'Access Denied' });
      }
    } catch (error) {
      return res.status(401).send({ status: 401, error: error.message })
    }
  }

  static authUser(req, res, next) {
    try {
      const tkens = req.header('x-token');
      if (tkens) {
        const payload = jwt.verify(tkens, process.env.secret);
        const isMentee = user.mentee.find(f => f.email === payload.email);
        console.log(payload.email);
        if (isMentee || payload.isAdmin === 'true') {
          req.payload = payload;
          next();
        } else return res.status(403).send({ status: 403, error: 'You cannot access this information'});
      } else return res.status(401).send({ status: 401, error: 'Unauthorized user' });
    } catch (error) {
      return res.status(401).send({ status: 401, error: error.message });
    }
  }

  static authSession(req, res, next) {
    try {
      const tokens = req.header('x-token');
      if (tokens) {
        const payload = jwt.verify(tokens, process.env.secret);
        const isUser = users.findByEmail(req.body.mentorEmail);
        const isMentor = user.mentor.find(p => p.email === payload.email);
        if (isUser) {
          if (payload.isAdmin === false) {
            if (payload.email !== isUser.email && !isMentor) {
              req.payload = payload;
              next();
            } else return res.status(403).send({ status: 403, error: 'You are not allowed to create a mentorship request' });
          } else return res.status(403).send({ status: 403, error: 'Admin cannot create a mentorship request' });
        } else {
          return res.status(401).send({ status: 401, error: 'Unauthorized user' });
        }
      } else {
        return res.status(401).send({ status: 401, error: 'Unauthorized user!' });
      }

    } catch (error) {
      return res.status(401).send({ status: 401, error: error.message });
    }
  }

  static authAcceptRequest(req, res, next) {
    try {
      const x_token = req.header('x-token');
      const id = parseInt(req.params.id);
      const sessionFound = sessions.find(f => f.sessionId === id);
      if (x_token) {
        const payload = jwt.verify(x_token, process.env.secret);
        if (sessionFound) {
          if (payload.id === sessionFound.mentorId) {
            req.payload = payload;
            next();
          } else {
            return res.status(403).send({ status: 403, error: 'You cannot accept or reject this request' });
          }
        } else return res.status(404).send({ status: 404, error: 'session request not found' });
      } else return res.status(401).send({ status: 401, error: 'Unauthorized user' });
    } catch (error) {
      return res.status(401).send({ status: 401, error: error.message });
    }
  }

  static authReview(req, res, next) {
    try {
      const tok = req.header('x-token');
      const findSession = sessions.find(p => p.sessionId === parseInt(req.params.id));
      if (tok) {
        const data = jwt.verify(tok, process.env.secret);
        if (findSession) {
          if (data.email === findSession.menteeEmail) {
            req.payload = data;
            next();
          } else return res.status(403).send({ status: 403, error: 'You cannot review this session' })
        } else return res.status(404).send({ status: 404, error: 'Session not found' });
      } else return res.status(401).send({ status: 401, error: 'Unauthorized user' });
    } catch (error) {
      return res.status(401).send({ status: 401, error: error.message });
    }
  }
}

export default Authenticate;