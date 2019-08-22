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
      res.status(409).send({ status: 409, message: 'This email is already signed up' });
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
      res.status(201).send({ status: 201, data: token, message: 'User created successfully' });
    }
  }
  static signinUser(req,res) {
    const { email, password } = req.body;
    const isEmailExist = User.findByEmail(email);
    if(isEmailExist) {
      const verifiedPassword = bcrypt.compareSync(password,isEmailExist.password);
      if(verifiedPassword) {
        const token = jwt.sign({ id: isEmailExist.id, email: isEmailExist.email, isAdmin: isEmailExist.isAdmin }, process.env.secret);
        res.status(200).send({ status: 200, data: token, message: 'User is successfully logged in' });
      } else {
        res.status(401).send({ status: 401, message: 'The password provided is incorrect, please try again' });
      } 
    } else {
      res.status(401).send({ status: 401, message: 'The email provided is incorrect, please try again' });
    }
  }

  static getAllMentors (req,res) {
    const mentors = User.getAll();
    return res.status(200).send({ status: {integer:200}, data: mentors });
  }

}

export default controlUser;