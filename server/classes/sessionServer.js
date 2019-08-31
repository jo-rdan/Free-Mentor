import sessions from '../models/sessionsReq';
import users from '../models/users';
import review from '../models/reviews';

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

  static createReview(object) {
    review.push(object);
  }
}

export default Session;
