import session from '../helpers/sessionServer';
import user from '../data/users';
import reviews from '../data/reviews'; 
import sessions from '../data/sessionsReq';
import query from '../config/queries';
import execute from '../config/connectDb';
import response from '../helpers/responses';

class SessionController {
  static async create(req, res) {
    try {
      const { questions } = req.body;
      const { id } = req.data[0][0];
      const newSession = {
        mentorId: id,
        menteeId: req.payload.id,
        questions,
        menteeEmail: req.payload.email,
        status: 'pending',
      };
      const sessionCreated = await execute(query[1].createSession, [newSession.mentorId, newSession.menteeId, newSession.questions, newSession.menteeEmail, newSession.status,]);
      
      return response.onSuccess(res, 201, '', sessionCreated);
    } catch (error) {
      return response.onError(res, 500, error.message);
    }
  }

  static async acceptMentorship(req, res) {
    try {      
      const sessionFound = req.data[0][0];      
      return response.onSuccess(res, 200, '', sessionFound);
    } catch (error) {
      return response.onError(res, 500, error.message);
    }
  }

  static declineMentorship(req, res) {
    try {
      const sessionData = req.data[0][0];
      return response.onSuccess(res, 200, '', sessionData);
    } catch (error) {
      return response.onError(res, 500, error.message);
    }
  } 

}

export default SessionController;
