import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../helpers/userServer';
import execute from '../config/connectDb';
import query from '../config/queries';
import encryptPass from '../helpers/bcryptEncrypt';
import encryptToken from '../helpers/tokenEncryption';

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
    return res.status(201).send({
      status: 201,
      message: 'User created successfully',
      data: {
        id: createdUser[0].id,
        firstName: createdUser[0].firstname,
        lastname: createdUser[0].lastname,
        email: createdUser[0].email,
        address: createdUser[0].address,
        bio: createdUser[0].bio,
        occupation: createdUser[0].occupation,
        expertise: createdUser[0].expertise,
      },
    });

  }

  static async signinUser(req, res) {
    try {
      const token = await encryptToken.encryptToken(req.body.email);
      res.status(200).send({ status: 200, message: 'User is successfully logged in', data: { token } });
    } catch (error) {
      return res.status(500).send({ status: 500, error: error.message });
    }
  }
  
  static getAllMentors(req, res) {
    const mentors = User.getAll();
    const mentorsToBeListed = [];
    mentors.forEach((mentorObj) => {
      const {
        mentorId, firstName, lastName, email, address, bio, occupation, expertise,
      } = mentorObj;
      const mentorsToBe = {
        mentorId,
        firstName,
        lastName,
        email,
        address,
        bio,
        occupation,
        expertise,
      };
      mentorsToBeListed.push(mentorsToBe);
    });
    return res.status(200).send({ status: 200, data: mentorsToBeListed });
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
