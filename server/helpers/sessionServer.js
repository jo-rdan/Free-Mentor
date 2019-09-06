import sessions from '../data/sessionsReq';
import users from '../data/users';
import review from '../data/reviews';

class Session {

  static createSession(object) {
    sessions.push(object);
  }

  static findMentorByEmail(email) {
    const foundEmail = users.mentor.find(mentorObj => mentorObj.email === email);    
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
