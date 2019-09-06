/* eslint-disable */
import user from '../helpers/userServer';
import users from '../data/users';
import review from '../data/reviews';

class Admin {
  static changeUserToMentor(req,res) {
      const id = parseInt(req.params.id);

      const changeUser = user.findById(id);
      if (changeUser) {
        if (changeUser.isAdmin === true) {
          return res.status(403).send({ status: 403 , error: 'Admin cannot be changed to mentor' });
        } else {
          const { firstName, lastName, email, password, address, bio, occupation, expertise, isAdmin } = changeUser;

          const newMentor = {
            mentorId: changeUser.menteeId,
            firstName,
            lastName,
            email,
            password,
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

  static deleteReview(req,res) {
    const isExistReview = review.find(sessionObject => sessionObject.sessionId === parseInt(req.params.id));
    if(isExistReview) {
      const index = review.indexOf(isExistReview);
      review.splice(index,1);
      return res.status(200).send({ status: 200, data: { message: 'Review successfully deleted!'}});
    } else return res.status(403).send({ status: 403, error: 'This session is not reviewed yet or it does not exist'});
  }
}

export default Admin;