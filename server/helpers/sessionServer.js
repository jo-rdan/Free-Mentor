import execute from '../config/connectDb';
import query from '../config/queries';
import response from './responses';

class Session {
  static async sessionHelper (req, res, next) {
    try {
      const { mentorEmail, questions } = req.body;
      const isMentor = await execute(query[0].isMentorEmail, [mentorEmail]);      
      const isSession = await execute(query[1].isSessionExist, [questions, req.payload.email]);
      if(!isMentor[0]) {
        return response.onError(res, 403, 'You cannot create a session with this user');
      }      

      if (isSession.length === 0) {
        req.data = [isMentor];
        next();
      } else response.onError(res, 409, 'This session is already created');
    } catch (error) {
      return response.onSuccess(res, 500, error.message);
    }
  }  

  static async acceptHelper (req, res, next) {
    try {
      const id = parseInt(req.params.id, 10);
      const sessionFound = req.data[0][0];      
      if (sessionFound.status === 'pending' || sessionFound.status === 'rejected') {
        const acceptSession = await execute(query[1].accept, [id]);
        req.data = [acceptSession];
        next();
      } else return response.onError(res, 409, 'This session is already accepted');
    } catch (error) {
      return response.onError(res, 500, error.message);
    }
  }

  static async reviewHelper (req, res, next) {
    const { score, remark } = req.body;
    const findSessionData = [[req.data]];
    const isReview = await execute(query[1].isReview, [findSessionData.sessionId, remark]);
    const mentee = await execute(query[0].isExist, [req.payload.email]);

    if (findSessionData.status === 'accepted') return response.onError(res, 403, 'The session is not accepted yet');
    if (isReview) return response.onError(res, 409, 'This session is reviewed already');
    req.pay = [[mentee]];
    req.session = findSessionData;
    next();
  }
}

export default Session;
