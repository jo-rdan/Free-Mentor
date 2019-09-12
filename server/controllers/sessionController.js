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

  static acceptMentorship(req, res) {
    const sessionFound = sessions.find((sessionObject) => sessionObject.sessionId == req.params.id);
    if (sessionFound.status === 'pending') {
      sessionFound.status = 'accepted';
      return res.status(200).send({ status: 200, data: sessionFound });
    } if (sessionFound.status === 'rejected') {
      sessionFound.status = 'accepted';
      return res.status(200).send({ status: 200, data: sessionFound });
    } return res.status(401).send({ status: 401, error: 'This session request is already accepted' });
  }

  static declineMentorship(req, res) {
    const foundSession = sessions.find((sessionObject) => sessionObject.sessionId == req.params.id);

    if (foundSession.status === 'pending' || foundSession.status === 'accepted') {
      foundSession.status = 'rejected';
      return res.status(200).send({ status: 200, data: foundSession });
    }
    return res.status(401).send({ status: 401, error: 'This session is already rejected' });
  }

  static reviewMentor(req, res) {
    const { score, remark } = req.body;
    const isSession = sessions.find((sessionObj) => sessionObj.sessionId == req.params.id);
    const isReview = reviews.find((reviewObj) => reviewObj.sessionId === isSession.sessionId);   
    const mentee = user.mentee.find((menteeObj) => menteeObj.email == isSession.menteeEmail);
    const mentor = user.mentor.find((mentorObj) => mentorObj.mentorId == isSession.mentorId);
    if (isSession.status !== 'accepted') return res.status(403).send({ status: 403, error: 'This session is not accepted yet'})
    if (isReview) return res.status(409).send({ status: 409, error: 'This session is already reviewed'});
    
    const newReview = {
      sessionId: isSession.sessionId,
      mentorFullNames: `${mentor.firstName  } ${  mentor.lastName}`,
      score,
      menteeFullNames: `${mentee.firstName  } ${  mentee.lastName}`,
      remark
    }
    session.createReview(newReview);
    return res.status(200).send({ status: 200, data: newReview });
    

  }
}

export default SessionController;
