import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../helpers/userServer';
import execute from '../config/connectDb';
import query from '../config/queries';
import encryptPass from '../helpers/bcryptEncrypt';
import encryptToken from '../helpers/tokenEncryption';
import response from '../helpers/responses';
dotenv.config();

class controlUser {
  static async signupUser(req, res) {
    const {
      firstName, lastName, email, password, address, bio, occupation, expertise,
    } = req.body;
    const passwords = encryptPass.encrypt(password)
    const newUser = [
      firstName,
      lastName,
      email,
      passwords,
      address,
      bio,
      occupation,
      expertise,
    ];
    const createdUser = await execute(query[0].create, newUser);
    const data = {
      id: createdUser[0].id,
      firstName: createdUser[0].firstname,
      lastname: createdUser[0].lastname,
      email: createdUser[0].email,
      address: createdUser[0].address,
      bio: createdUser[0].bio,
      occupation: createdUser[0].occupation,
      expertise: createdUser[0].expertise,
    }
    return response.onSuccess(res, 201, 'User created successfully', data);

  }

  static async signinUser(req, res) {
    try {
      const token = await encryptToken.encryptToken(req.body.email);
      return response.onSuccess(res, 200, token);
    } catch (error) {
      return response.onError(res, 500, error.message);
    }
  }
  
  static async getAllMentors(req, res) {
    const getMentors = await execute(query[0].getAllMentors);   
    return response.onSuccess(res, 200, getMentors);
  }

  static getMentor(req, res) {
    const id = parseInt(req.params.mentorId,10);
    const mentor = User.findMentorById(id);
    if (mentor) {
      const {
        mentorId, firstName, lastName, email, address, bio, occupation, expertise,
      } = mentor;
      const mentorToBe = {
        mentorId, firstName, lastName, email, address, bio, occupation, expertise,
      };
      return res.status(200).send({ status: 200, data: mentorToBe });
    }
    return res.status(404).send({ status: 404, error: 'User not found' });

  }

}

export default controlUser;
