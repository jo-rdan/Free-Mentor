import sessions from '../models/sessionsReq';
import users from '../models/users';

class Session {

  static createSession(object) {
    sessions.push(object);
  }

  static findMentorByEmail(email) {
    const foundEmail = users.mentor.find(f => f.email === email);    
    if(foundEmail) {
      return foundEmail;
    } 
    return false;
  }
}

export default Session;
