import bcrypt from 'bcrypt';

class EncryptPassword {
  static encrypt(password) {
    const encryptedPassword = bcrypt.hashSync(password, 10);
    if (encryptedPassword) return encryptedPassword;
    return false; 
  }

  static decrypt(password, iSPassword) {
    const decryptedPassword = bcrypt.compareSync(password, iSPassword);
    if (decryptedPassword) return decryptedPassword;
    return false;
  }
}
export default EncryptPassword;