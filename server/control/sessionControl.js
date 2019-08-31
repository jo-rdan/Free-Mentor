/* eslint-disable*/
import session from '../classes/sessionServer';
import sessions from '../models/sessionsReq';
import user from '../models/users';

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
    const sessionFound = sessions.find(f => f.sessionId == req.params.id);
    if (sessionFound.status === 'pending') {
      sessionFound.status = 'accepted';
      return res.status(200).send({ status: 200, data: sessionFound });
    } else if (sessionFound.status === 'rejected') {
      sessionFound.status = 'accepted';
      return res.status(200).send({ status: 200, data: sessionFound });
    } else return res.status(401).send({ status: 401, error: 'This session request is already accepted' });
  }
  static declineMentorship(req, res) {
    const foundSession = sessions.find(f => f.sessionId == req.params.id);

    if (foundSession.status === 'pending' || foundSession.status === 'accepted') {
      foundSession.status = 'rejected';
      return res.status(200).send({ status: 200, data: foundSession });
    }
    return res.status(401).send({ status: 401, error: 'This session is already rejected' });
  }

  static reviewMentor(req, res) {
    const { score, remark } = req.body;
    const isSession = sessions.find(f => f.sessionId == req.params.id);
    const mentee = user.mentee.find(p => p.email == isSession.menteeEmail);
    if (isSession.status !== 'accepted') return res.status(403).send({ status: 403, error: 'This session is not accepted yet'})
    const newReview = {
      sessionId: isSession.sessionId,
      mentorId: isSession.mentorId,
      menteeId: req.payload.id,
      score,
      menteeFullNames: mentee.firstName + ' ' + mentee.lastName,
      remark
    }

    session.createReview(newReview);
    return res.status(200).send({ status: 200, data: newReview });

  }
}

export default SessionController;