/* eslint-disable*/
import session from '../classes/sessionServer';
import sessions from '../models/sessionsReq';

class SessionController {
  static create(req, res) {
    const { mentorEmail, questions } = req.body;
    const isMentor = session.findMentorByEmail(mentorEmail);
    if (isMentor) {
      session.createSession({
        sessionId: sessions.length + 1,
        mentorId: isMentor.mentorId,
        menteeId: req.payload.id,
        questions,
        menteeEmail: req.payload.email,
        status: 'pending'
      });
      return res.status(201).send({
        status: 201, 
        data: {
          sessionId: sessions.length + 1,
          mentorId: isMentor.mentorId,
          menteeId: req.payload.id,
          questions,
          menteeEmail: req.payload.email,
          status: 'pending'
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
    } else return res.status(401).send({ status: 401, error: 'This session request is already accepted'});
  } 
}

export default SessionController;