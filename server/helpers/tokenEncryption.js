import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import execute from '../config/connectDb'
import query from '../config/queries';

dotenv.config();

class EncryptJwt {
  static async encryptToken(email) {
    const isEmail = await execute(query[0].isExist, [email]);    
    if (isEmail) {
      const payload = {id: isEmail[0].id, email: isEmail[0].email, isAdmin: isEmail[0].isadmin, isMentee: isEmail[0].ismentee };
      const token = jwt.sign(payload, process.env.secret, { expiresIn: '1h'});
      return token;
    }
  }

  static decryptToken(token) {
    const data = jwt.verify(token, process.env.secret);
    return data;
  }
}
export default EncryptJwt;