/* eslint-disable */
import users from '../data/users';

class User {
  static create(object) {
    users.mentee.push(object);
  }

  static findByEmail(email) {
    const foundUserEmail = users.mentee.find(menteeObj => menteeObj.email === email);
    const foundMentorEmail = users.mentor.find(mentorObj => mentorObj.email === email);
    if (foundUserEmail) return foundUserEmail;
    else if (foundMentorEmail) return foundMentorEmail;
    else return false;
  }

  static findById(id) {
    const foundId = users.mentee.find(menteeObj => menteeObj.menteeId === id);
    if(foundId){
      return foundId;
    } else {
      return false;
    }
  }
  static findMentorById(id) {
    const foundMentor = users.mentor.find(mentorObj => mentorObj.mentorId === id);
    if(foundMentor){
      return foundMentor;
    } else {
      return false;
    }
  }

  static getAll() {
    return users.mentor;
  }
}

export default User; 