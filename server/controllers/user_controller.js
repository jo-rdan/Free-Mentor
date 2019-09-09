import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import User from '../helpers/userServer';
import execute from '../config/connectDb';
import query from '../config/queries';

dotenv.config();

class controlUser {
  static async signupUser(req, res) {
    const {
      firstName, lastName, email, password, address, bio, occupation, expertise,
    } = req.body;
    const passwords = bcrypt.hashSync(password, 10);

    const isUserExist = await execute(query[0].isExist, [email]);

    if (isUserExist.length > 0) {
      res.status(409).send({ status: 409, error: 'This email is already signed up' });
    } else {
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
  }

  static signinUser(req, res) {
    const { email, password } = req.body;
    const isEmailExist = User.findByEmail(email);

    if (isEmailExist) {
      try {
        const verifiedPassword = bcrypt.compareSync(password, isEmailExist.password);
        if (verifiedPassword) {
          if (isEmailExist) {
            const token = jwt.sign({ id: isEmailExist.menteeId || isEmailExist.mentorId, email: isEmailExist.email, isAdmin: isEmailExist.isAdmin }, process.env.secret);
            return res.status(200).send({ status: 200, error: 'User is successfully logged in', data: { token } });
          }
        } else {
          return res.status(401).send({ status: 401, error: 'The password provided is incorrect, please try again' });
        }
      } catch (error) {
        return res.status(500).send({ status: 500, error: 'The server is temporary down, we wil get back to you shortly' });
      }

    } else {
      return res.status(401).send({ status: 401, error: 'The email provided is incorrect, please try again' });
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
    const id = parseInt(req.params.mentorId);
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
