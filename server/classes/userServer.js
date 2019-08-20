/* eslint-disable */
import users from '../models/users';

class User {
  constructor() {
    this.id = null;
    this.firstName = null;
    this.lastName = null;
    this.email = null;
    this.password = null;
    this.address = null;
    this.bio = null;
    this.occupation = null;
    this.expertise = null;
    this.isAdmin = false;
  }

  create(object) {
    users.mentee.push(object);
  }

  static findByEmail(email) {
    const foundEmail = users.mentee.find(f => f.email === email);
    return foundEmail;
  }
}

export default User;