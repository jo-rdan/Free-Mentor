import users from '../data/users';
import execute from '../config/connectDb';
import query from '../config/queries';

class User {
  static create(object) {
    users.mentee.push(object);
  }

  static async findByEmail(email) {
    const foundUserEmail = await execute(query[0].isExist, [email]);
    const foundMentorEmail = await execute(query[0].isMentor);

    if (foundUserEmail) return foundUserEmail;
    if (foundMentorEmail) return foundMentorEmail;
    return false;
  }

  static findById(id) {
    const foundId = users.mentee.find(menteeObj => menteeObj.menteeId === id);
    if (foundId) {
      return foundId;
    }
    return false;

  }

  static findMentorById(id) {
    const foundMentor = users.mentor.find(mentorObj => mentorObj.mentorId === id);
    if(foundMentor) {
      return foundMentor;
    }
    return false;

  }

  static getAll() {
    return users.mentor;
  }
}

export default User;
