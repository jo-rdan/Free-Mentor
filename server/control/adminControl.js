/* eslint-disable */
import user from '../classes/userServer';
import users from '../models/users';

class Admin {
  static changeUserToMentor(req,res) {
      const id = parseInt(req.params.id);

      const changeUser = user.findById(id);
      if (changeUser) {
        if (changeUser.isAdmin === true) {
          return res.status(403).send({ status: 403 , error: 'Admin cannot be changed to mentor' });
        } else {
          const { firstName, lastName, email, address, bio, occupation, expertise, isAdmin } = changeUser;
          const newMentor = {
            mentorId: changeUser.menteeId,
            firstName,
            lastName,
            email,
            address,
            bio,
            occupation,
            expertise,
            isAdmin
          }
          users.mentor.push(newMentor);
          const index = users.mentee.indexOf(changeUser.id);
          users.mentee.splice(index, 1);

          return res.status(200).send({ status: 200, data: 'User account changed to mentor'  });
        }
      } else {
        return res.status(404).send({ status: 404, error: 'User not found' });
      }
  }
}

export default Admin;