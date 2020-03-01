const strings = /^\S[A-Za-z_ ]{1,}$/;
const emails = /^\S+@[\w\-]+\.[A-Za-z ]{2,}$/;
const passwords = /^\S[A-Za-z0-9]{5,}$/;

class Validations {
  static validation(req, res, next) {
    try {
      const { firstName, lastName, email, password, address, bio, occupation, expertise } = req.body;
      if (!strings.test(firstName)) throw new Error('your first name must not contain special characters, numbers or ehitespaces');
      if (!strings.test(lastName)) throw new Error('your last name must not contain special characters, numbers or whitespaces');
      if (!emails.test(email)) throw new Error('your email must be valid(e.g:jordankayinamura@gmail.com)');
      if (!passwords.test(password)) throw new Error('your password must be at least 5 characters long')
      next();
    } catch (error) {
      res.status(400).send({
        status: 400,
        error: error.message,
      });
    }
  };

  static signInValidation(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!emails.test(email)) throw new Error('your email must be valid(e.g:jordankayinamura@gmail.com)');
      if (!passwords.test(password)) throw new Error('your password must be at least 5 characters long');
      next();
    } catch (error) {
      res.status(400).send({ status: 400, error: error.message });
    }
  };
}

export default Validations;
