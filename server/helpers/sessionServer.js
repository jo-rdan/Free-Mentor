import execute from '../config/connectDb';
import query from '../config/queries';
import response from './responses';

class Session {
  static async sessionHelper (req, res, next) {
    try {
      const { mentorEmail, questions } = req.body;
      const isMentor = await execute(query[0].isExist, [mentorEmail]);
      const isSession = await execute(query[1].isSessionExist, [questions, req.payload.email]);
      if(!isMentor[0]) {
        return response.onError(res, 404, 'User not exist');
      }      

      if (isSession.length === 0) {
        req.data = [isMentor];
        next();
      } else response.onError(res, 409, 'This session is already created');
    } catch (error) {
      return response.onSuccess(res, 500, error.message);
    }

  }  
}

export default Session;
