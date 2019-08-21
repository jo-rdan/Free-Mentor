/* eslint-disable */
import user from '../classes/userServer';
import users from '../models/users';

class Admin {
  static changeUserToMentor(req,res) {
      const id = parseInt(req.params.id);

      const changeUser = user.findById(id);
      if (changeUser) {
        if (changeUser.isAdmin === true) {
          return res.status(403).send({ status: { integer: 403 }, error: { message: 'Admin cannot be changed to mentor' } });
        } else {
          users.mentor.push(changeUser);
          const index = users.mentee.indexOf(changeUser.id);
          users.mentee.splice(index, 1);

          return res.status(200).send({ status: { Integer: 200 }, data: { message: 'User account changed to mentor' } });
        }
      } else {
        return res.status(404).send({ status: { integer: 404 }, error: { message: 'User not found' } });
      }
  }
}

export default Admin;