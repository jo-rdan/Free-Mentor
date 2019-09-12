import users from '../data/users';
import execute from '../config/connectDb';
import query from '../config/queries';
import encryptPass from './bcryptEncrypt';
import response from './responses';
import { exec } from 'child_process';

class User {
  static async signupHelper(req, res, next) {
    const { email } = req.body;
    const isUserExist = await execute(query[0].isExist, [email]);    
    if (isUserExist[0]) {
      return response.onError(res, 409, 'This user already exist!');
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
        } else return response.onError(res, 401, 'Incorrect password');
      } else return response.onError(res, 401, 'This email is not signed up yet!');
    } catch (error) {
      return res.status(500).send({ status: 500, error: error.message });
    }
  }

  static async adminHelper(req, res, next) {
    const { id } = req.params;   
    try {
      const isUserExist = await execute(query[0].isUser, [id]); 
      if (isUserExist[0] && isUserExist[0].ismentee === true && isUserExist[0].isadmin === false) {
        next();
      }
      else if (!isUserExist[0]) return response.onError(res, 404, 'User not found');
      else return response.onError(res, 403, 'This user cannot be changed to mentor');
    } catch (error) {
      response.onError(res, 500, error.message);
    }
  }

  static async getOne(req, res, next) {
    const id = parseInt(req.params.mentorId, 10);
    const mentor = await execute(query[0].getOne, [id]);
    if (mentor[0]) {
      req.data = [mentor];
      next();
    }
    else response.onError(res, 404, 'User not found');
  }
}

export default User;
