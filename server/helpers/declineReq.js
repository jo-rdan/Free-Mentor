import execute from '../config/connectDb';
import query from '../config/queries';
import response from './responses';

  const declineHelper = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const isSessionFound = req.data[0][0];
    if (isSessionFound.status === 'pending' || isSessionFound.status === 'accepted') {
      const declineSession = await execute(query[1].reject, [id]);
      req.data = [declineSession];
      next();
    } else return response.onError(res, 409, 'This session is already rejected');
  } catch (error) {
    return response.onError(res, 500, error.message);
  } 
}
export default declineHelper;