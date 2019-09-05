/* eslint-disable */
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import User from '../classes/userServer';
import users from '../models/users';

dotenv.config();

class controlUser {
  static signupUser(req,res) {
    const { firstName, lastName, email, password, address, bio, occupation, expertise, type } = req.body;
    const hashedPassword = bcrypt.hashSync(password,10);
    
    const isEmail = User.findByEmail(email);

    if (isEmail) {
      res.status(401).send({ status: 401, message: 'This email is already signed up' });
    } else {
      const newUser = {
      menteeId: users.mentee.length + 1,
      firstName,
      lastName,
      email,
      password: hashedPassword,
      address,
      bio,
      occupation,
      expertise,
      isAdmin: false
      }
      User.create(newUser);
      const token = jwt.sign({ id:newUser.menteeId, email:newUser.email, isAdmin:newUser.isAdmin }, process.env.secret);
      return res.status(201).send({ status: 201, message: 'User created successfully', data: {token}});
    }
  }
  static signinUser(req,res) {
    const { email, password } = req.body;
    const isEmailExist = User.findByEmail(email);
    
    if(isEmailExist) {
      try {
        const verifiedPassword = bcrypt.compareSync(password, isEmailExist.password);
        if (verifiedPassword) {
          if (isEmailExist) {
            const token = jwt.sign({ id: isEmailExist.menteeId || isEmailExist.mentorId, email: isEmailExist.email, isAdmin: isEmailExist.isAdmin }, process.env.secret);
            return res.status(200).send({ status: 200, message: 'User is successfully logged in', data: {token} });
          }
        } else {
          return res.status(401).send({ status: 401, message: 'The password provided is incorrect, please try again' });
        }
      } catch (error) {
        return res.status(500).send({ status: 500, message: 'The server is temporary down, we wil get back to you shortly'});
      }
 
    } else {
      return res.status(401).send({ status: 401, message: 'The email provided is incorrect, please try again' });
    }
  }

  static getAllMentors (req,res) {
    const mentors = User.getAll();
    const mentorsToBeListed =[];
    mentors.forEach((em) => {
      const { mentorId, firstName, lastName, email, address, bio, occupation, expertise} =em;
      const mentorsToBe = {
        mentorId,
        firstName,
        lastName,
        email,
        address,
        bio,
        occupation,
        expertise
      };
      mentorsToBeListed.push(mentorsToBe);
    });
    return res.status(200).send({ status:200, data: mentorsToBeListed });
  }

  static getMentor(req,res) {
    const id = parseInt(req.params.mentorId);
    const mentor = User.findMentorById(id);
    if(mentor){
      const { mentorId, firstName, lastName, email, address, bio, occupation, expertise } = mentor;
      const mentorToBe =  {mentorId, firstName, lastName, email, address, bio, occupation, expertise}
    return res.status(200).send({ status: 200, data: mentorToBe });
    } else {
      return res.status(404).send({ status: 404, error: 'User not found' });
    }
  }

}

export default controlUser;