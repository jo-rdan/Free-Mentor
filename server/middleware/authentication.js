import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

class Authenticate {
  static auth (req,res,next) {
    try {
      const headers = req.header('x-token');
      if (headers) { 
        const payload = jwt.verify(headers, process.env.secret);
        if (payload.isAdmin === true) {
          req.payload = payload;
          next();
        } else {
          return res.status(403).send({ status: { Integer: 403 }, error: { message: 'You are not allowed to perform this action' } });
        }
      } else {
        return res.status(401).send({ status: { Integer: 401 }, error: { message: 'Access Denied' } });
      }
    } catch (error) {
      return res.status(401).send({ status: { Integer: 401 }, error: { message: error.message } })
    } 
  }
}

export default Authenticate;