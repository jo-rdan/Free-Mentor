import review from '../data/reviews';
import responses from '../helpers/responses';
import query from '../config/queries';
import execute from '../config/connectDb';

class Admin {
  static async changeUserToMentor(req,res) {
    const id = parseInt(req.params.id,10);
    const changeUser = await execute(query[0].changeToMentor, [id]);
    return responses.onSuccess(res, 200, 'User account changed to mentor');  
  }

  static deleteReview(req,res) {
    const isExistReview = review.find((sessionObject) => sessionObject.sessionId === parseInt(req.params.id));
    if (isExistReview) {
      const index = review.indexOf(isExistReview);
      review.splice(index,1);
      return res.status(200).send({ status: 200, data: { message: 'Review successfully deleted!'}});
    } return res.status(403).send({ status: 403, error: 'This session is not reviewed yet or it does not exist'});
  }
}

export default Admin;
