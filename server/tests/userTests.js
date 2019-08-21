/* eslint-disable */

import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
chai.should();


describe('Authentication tests', () => {
  it('should be able to signup', (done) => {
    chai.request(app)
    .post('/api/v1/auth/signup').send({
      firstName: 'Jordan',
      lastName: 'Manzi',
      email: 'jordan@gmail.com',
      password: 'joerwanda123',
      address: 'kinyinya',
      bio: 'Am a beginner who wants to be more',
      occupation: 'Software developer',
      expertise: 'Software Enfineering'
    })
      .end((err, res) => {
        res.should.has.status(201);
        done();
      });
  });
  it('should not be able to signup when first name is invalid', (done) => {
    chai.request(app).post('/api/v1/auth/signup').send({
      firstName: 'Jorda1n',
      lastName: 'Manzi',
      email: 'jordan@gmail.com',
      password: 'joerwanda123',
      address: 'kinyinya',
      bio: 'Am a beginner who wants to be more',
      occupation: 'Software developer',
      expertise: 'Software Enfineering'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when first name is empty', (done) => {
    chai.request(app).post('/api/v1/auth/signup').send({
      firstName: '',
      lastName: 'Manzi',
      email: 'jordan@gmail.com',
      password: 'joerwanda123',
      address: 'kinyinya',
      bio: 'Am a beginner who wants to be more',
      occupation: 'Software developer',
      expertise: 'Software Enfineering'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when last name is empty', (done) => {
    chai.request(app).post('/api/v1/auth/signup').send({
      firstName: 'Jordan',
      lastName: '',
      email: 'jordan@gmail.com',
      password: 'joerwanda123',
      address: 'kinyinya',
      bio: 'Am a beginner who wants to be more',
      occupation: 'Software developer',
      expertise: 'Software Enfineering'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when last name is invalid', (done) => {
    chai.request(app).post('/api/v1/auth/signup').send({
      firstName: 'Jordan',
      lastName: 'Manz3',
      email: 'jordan@gmail.com',
      password: 'joerwanda123',
      address: 'kinyinya',
      bio: 'Am a beginner who wants to be more',
      occupation: 'Software developer',
      expertise: 'Software Enfineering'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when email is invalid', (done) => {
    chai.request(app).post('/api/v1/auth/signup').send({
      firstName: 'Jordan',
      lastName: 'Manzi',
      email: 'jordangmail.com',
      password: 'joerwanda123',
      address: 'kinyinya',
      bio: 'Am a beginner who wants to be more',
      occupation: 'Software developer',
      expertise: 'Software Enfineering'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when email is empty', (done) => {
    chai.request(app).post('/api/v1/auth/signup').send({
      firstName: 'Jordan',
      lastName: 'Manzi',
      email: '',
      password: 'joerwanda123',
      address: 'kinyinya',
      bio: 'Am a beginner who wants to be more',
      occupation: 'Software developer',
      expertise: 'Software Enfineering'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when password is empty', (done) => {
    chai.request(app).post('/api/v1/auth/signup').send({
      firstName: 'Jordan',
      lastName: 'Manzi',
      email: 'jordan@gmail.com',
      password: '',
      address: 'kinyinya',
      bio: 'Am a beginner who wants to be more',
      occupation: 'Software developer',
      expertise: 'Software Enfineering'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when password has less than 5 characters', (done) => {
    chai.request(app).post('/api/v1/auth/signup').send({
      firstName: 'Jordan',
      lastName: 'Manzi',
      email: 'jordan@gmail.com',
      password: 'joe',
      address: 'kinyinya',
      bio: 'Am a beginner who wants to be more',
      occupation: 'Software developer',
      expertise: 'Software Enfineering'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when address is empty ', (done) => {
    chai.request(app).post('/api/v1/auth/signup').send({
      firstName: 'Jordan',
      lastName: 'Manzi',
      email: 'jordan@gmail.com',
      password: 'joerwanda123',
      address: '',
      bio: 'Am a beginner who wants to be more',
      occupation: 'Software developer',
      expertise: 'Software Enfineering'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when address is invalid ', (done) => {
    chai.request(app).post('/api/v1/auth/signup').send({
      firstName: 'Jordan',
      lastName: 'Manzi',
      email: 'jordan@gmail.com',
      password: 'joerwanda123',
      address: 'kinyinya5',
      bio: 'Am a beginner who wants to be more',
      occupation: 'Software developer',
      expertise: 'Software Enfineering'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when bio is invalid ', (done) => {
    chai.request(app).post('/api/v1/auth/signup').send({
      firstName: 'Jordan',
      lastName: 'Manzi',
      email: 'jordan@gmail.com',
      password: 'joerwanda123',
      address: 'kinyinya',
      bio: '12312213 32323',
      occupation: 'Software developer',
      expertise: 'Software Enfineering'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when bio is empty ', (done) => {
    chai.request(app).post('/api/v1/auth/signup').send({
      firstName: 'Jordan',
      lastName: 'Manzi',
      email: 'jordan@gmail.com',
      password: 'joerwanda123',
      address: 'kinyinya',
      bio: '  ',
      occupation: 'Software developer',
      expertise: 'Software Enfineering'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when occupation is empty ', (done) => {
    chai.request(app).post('/api/v1/auth/signup').send({
      firstName: 'Jordan',
      lastName: 'Manzi',
      email: 'jordan@gmail.com',
      password: 'joerwanda123',
      address: 'kinyinya',
      bio: 'Am a beginner who wants to be more',
      occupation: '',
      expertise: 'Software Enfineering'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when occupation is invalid', (done) => {
    chai.request(app).post('/api/v1/auth/signup').send({
      firstName: 'Jordan',
      lastName: 'Manzi',
      email: 'jordan@gmail.com',
      password: 'joerwanda123',
      address: 'kinyinya',
      bio: 'Am a beginner who wants to be more',
      occupation: '123',
      expertise: 'Software Enfineering'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when expertise is empty', (done) => {
    chai.request(app).post('/api/v1/auth/signup').send({
      firstName: 'Jordan',
      lastName: 'Manzi',
      email: 'jordan@gmail.com',
      password: 'joerwanda123',
      address: 'kinyinya',
      bio: 'Am a beginner who wants to be more',
      occupation: 'Software developer',
      expertise: ''
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when expertise is invalid', (done) => {
    chai.request(app).post('/api/v1/auth/signup').send({
      firstName: 'Jordan',
      lastName: 'Manzi',
      email: 'jordan@gmail.com',
      password: 'joerwanda123',
      address: 'kinyinya',
      bio: 'Am a beginner who wants to be more',
      occupation: 'Software developer',
      expertise: '3241@!'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when email already exists', (done) => {
    chai.request(app).post('/api/v1/auth/signup').send({
      firstName: 'Jordan',
      lastName: 'Manzi',
      email: 'jordankayinamura@gmail.com',
      password: 'joerwanda123',
      address: 'kinyinya',
      bio: 'Am a beginner who wants to be more',
      occupation: 'Software developer',
      expertise: 'software engineering'
    })
      .end((err, res) => {
        res.should.has.status(409);
        done();
      });
  });

  it('should not be able to signup when all fields are empty', (done) => {
    chai.request(app).post('/api/v1/auth/signup').send({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: '',
      bio: '',
      occupation: '',
      expertise: ''
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should be able to sign in', (done) => {
    chai.request(app).post('/api/v1/auth/signin').send({
      email: 'jordankayinamura@gmail.com',
      password: 'joerwanda123'
    })
      .end((err, res) => {
        res.should.has.status(200);
        done();
      });
  });
  it('Mentor should be able to sign in', (done) => {
    chai.request(app).post('/api/v1/auth/signin').send({
      email: 'johndoe@gmail.com',
      password: 'joerwanda123'
    })
      .end((err, res) => {
        res.should.has.status(200);
        done();
      });
  });
  it('should not be able to sign in when email is empty', (done) => {
    chai.request(app).post('/api/v1/auth/signin').send({
      email: '',
      password: 'danger'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to sign in when email is invalid', (done) => {
    chai.request(app).post('/api/v1/auth/signin').send({
      email: 'jordankayinamura',
      password: 'danger'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to sign in when password is empty', (done) => {
    chai.request(app).post('/api/v1/auth/signin').send({
      email: 'jordankayinamura@gmail.com',
      password: ''
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to sign in when password is less than 5 characters', (done) => {
    chai.request(app).post('/api/v1/auth/signin').send({
      email: 'jordankayinamura@gmail.com',
      password: 'an'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to sign in when email is incorrect', (done) => {
    chai.request(app).post('/api/v1/auth/signin').send({
      email: 'joeyrwannda@gmail.com',
      password: 'joerwanda123'
    })
      .end((err, res) => {
        res.should.has.status(401);
        done();
      });
  });
  it('should not be able to sign in when passsword is incorrect', (done) => {
    chai.request(app).post('/api/v1/auth/signin').send({
      email: 'jordankayinamura@gmail.com',
      password: 'joerwanda'
    })
      .end((err, res) => {
        res.should.has.status(401);
        done();
      });
  });
});