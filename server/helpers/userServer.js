import users from '../data/users';
import execute from '../config/connectDb';
import query from '../config/queries';
import encryptPass from '../helpers/bcryptEncrypt';

class User {
  static async signupHelper(req, res, next) {
    const { email } = req.body;
    const isUserExist = await execute(query[0].isExist, [email]);    
    if (isUserExist[0]) {
      return res.status(409).send({ status: 409, error: 'User already in the database'});
    }
    next();
  }

  static async signinHelper(req, res, next) {
    const { email, password } = req.body;
    const isEmailExist = await execute(query[0].isExist, [email]);
    try {
      if (isEmailExist[0]) {
        const verifiedPassword = encryptPass.decrypt(password, isEmailExist[0].password)
        if (verifiedPassword) {
          next();
        } else return res.status(401).send({ status: 401, error: 'Incorrect password!' });
      } else return res.status(401).send({ status: 401, error: 'This email is not signed up yet!' });
    } catch (error) {
      return res.status(500).send({ status: 500, error: error.message });
    }
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
