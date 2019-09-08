/* eslint-disable*/
import session from '../helpers/sessionServer';
import sessions from '../data/sessionsReq';
import user from '../data/users';
import reviews from '../data/reviews';
import sesh from '../data/sessionsReq';
class SessionController {
  static create(req, res) {
    const { mentorEmail, questions } = req.body;
    const isMentor = session.findMentorByEmail(mentorEmail);
    if (isMentor) {
      const newSession = {
        sessionId: sessions.length + 1, 
        mentorId: isMentor.mentorId,
        menteeId: req.payload.id,
        questions,
        menteeEmail: req.payload.email,
        status: 'pending'
      }
      const isSessionExist = sesh.find(sessionObject => sessionObject.questions === newSession.questions);
      
      if (isSessionExist) return res.status(409).send({ status: 409, error: 'This session is already created'});
      session.createSession(newSession);
      return res.status(201).send({
        status: 201,
        data: {
          sessionId: newSession.sessionId,
          mentorId: newSession.mentorId,
          menteeId: newSession.menteeId,
          questions,
          menteeEmail: newSession.menteeEmail,
          status: newSession.status
        }
      });
    }
    return res.status(401).send({ status: 401, error: 'Unauthorized user' });
  }

  static acceptMentorship(req, res) {
    const sessionFound = sessions.find(sessionObject => sessionObject.sessionId == req.params.id);
    if (sessionFound.status === 'pending') {
      sessionFound.status = 'accepted';
      return res.status(200).send({ status: 200, data: sessionFound });
    } else if (sessionFound.status === 'rejected') {
      sessionFound.status = 'accepted';
      return res.status(200).send({ status: 200, data: sessionFound });
    } else return res.status(401).send({ status: 401, error: 'This session request is already accepted' });
  }
  static declineMentorship(req, res) {
    const foundSession = sessions.find(sessionObject => sessionObject.sessionId == req.params.id);

    if (foundSession.status === 'pending' || foundSession.status === 'accepted') {
      foundSession.status = 'rejected';
      return res.status(200).send({ status: 200, data: foundSession });
    }
    return res.status(401).send({ status: 401, error: 'This session is already rejected' });
  }

  static reviewMentor(req, res) {
    const { score, remark } = req.body;
    const isSession = sessions.find(sessionObj => sessionObj.sessionId == req.params.id);
    const isReview = reviews.find(reviewObj => reviewObj.sessionId === isSession.sessionId);   
    const mentee = user.mentee.find(menteeObj => menteeObj.email == isSession.menteeEmail);
    const mentor = user.mentor.find(mentorObj => mentorObj.mentorId == isSession.mentorId);
    if (isSession.status !== 'accepted') return res.status(403).send({ status: 403, error: 'This session is not accepted yet'})
    if (isReview) return res.status(409).send({ status: 409, error: 'This session is already reviewed'});
    else {
      const newReview = {
        sessionId: isSession.sessionId,
        mentorFullNames: mentor.firstName + ' ' + mentor.lastName,
        score,
        menteeFullNames: mentee.firstName + ' ' + mentee.lastName,
        remark
      }
      session.createReview(newReview);
      return res.status(200).send({ status: 200, data: newReview });
    }

  }
}

export default SessionController;