/* eslint-disable */
import users from '../models/users';

class User {
  static create(object) {
    users.mentee.push(object);
  }

  static findByEmail(email) {
    const foundUserEmail = users.mentee.find(f => f.email === email);
    const foundMentorEmail = users.mentor.find(m => m.email === email);
    if (foundUserEmail) return foundUserEmail;
    else if (foundMentorEmail) return foundMentorEmail;
    else return false;
  }

  static findById(id) {
    const foundId = users.mentee.find(f => f.menteeId === id);
    if(foundId){
      return foundId;
    } else {
      return false;
    }
  }
}

export default User; 