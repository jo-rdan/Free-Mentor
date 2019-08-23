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
        status: { Integer: 201 }, 
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
    return res.status(401).send({ status: { Integer: 401 }, error: 'Unauthorized user' });
  }
}

export default SessionController;