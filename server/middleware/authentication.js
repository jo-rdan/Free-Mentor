import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import users from '../helpers/userServer';
import user from '../data/users';
import encryptToken from '../helpers/tokenEncryption';
import sessions from '../data/sessionsReq'; 
import responses from '../helpers/responses';
import execute from '../config/connectDb';
import query from '../config/queries';

dotenv.config();

class Authenticate {
  static auth(req, res, next) {
    try {
      const headers = req.header('x-token');
      if (headers) {
        const payload = encryptToken.decryptToken(headers, process.env.secret);
        if (payload.isAdmin === true) {
          req.payload = payload;
          next();
        } else {
          return responses.onError(res, 403, 'You are not allowed to perform this action');
        }
      } else {
        return responses.onError(res, 401, 'Unauthorized user');
      }
    } catch (error) {
      return responses.onError(res, 401, error.message);
    }
  }

  static async authUser(req, res, next) {
    try {
      const tkens = req.header('x-token');
      if (tkens) {
        const payload = encryptToken.decryptToken(tkens, process.env.secret);
        const isMentee = await execute(query[0].isExist, [payload.email]);
        if (isMentee[0].ismentee === true || payload.isAdmin === true) {
          req.payload = payload;
          next();
        } else return responses.onError(res, 403, 'You cannot access this information');
      } else return responses.onError(res, 401, 'Unauthorized user');
    } catch (error) {
      return responses.onError(res, 401, error.message);
    }
  }

  static async authSession(req, res, next) {
    try {
      const tokens = req.header('x-token');
      if (tokens) {
        const payload = await encryptToken.decryptToken(tokens, process.env.secret);
        const isUser = await execute(query[0].isExist, [payload.email]);  
             
        if (isUser[0].isadmin === false && isUser[0] && isUser[0].ismentee === true ) {
          req.payload = payload;
          next();
        }
        else return responses.onError(res, 403, 'You are not allowed to create mentorship request');
      }
      else return responses.onError(res, 401, 'Unauthorized user');

    } catch (error) {
      return responses.onError(res, 401, error.message);
    }
  }

  static async authAcceptRequest(req, res, next) {
    try {
      const headers = req.header('x-token');
      const id = parseInt(req.params.id,10);
      const sessionFound = await execute(query[1].isSession, [id]);
      if (headers) {
        const payload = encryptToken.decryptToken(headers, process.env.secret);                
        if (sessionFound[0]) {
          if (payload.id === sessionFound[0].mentorid) {
            req.data = [sessionFound];
            next();
          } else {
            return responses.onError(res, 403, 'You cannot accept or reject this request');
          }
        } else return responses.onError(res, 404, 'Session not found');
      } else return responses.onError(res, 401, 'Unauthorized user'); 
    } catch (error) {
      return responses.onError(res, 401, error.message);
    }
  }

  static authReview(req, res, next) {
    try {
      const tok = req.header('x-token');
      const findSession = sessions.find((session) => session.sessionId === parseInt(req.params.id));
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