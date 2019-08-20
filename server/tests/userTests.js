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
      password: 'danger',
      address: 'kinyinya',
      bio: 'Am a beginner who wants to be more',
      occupation: 'Software developer',
      expertise: 'Software Enfineering'
    })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.an('object');
        done();
      });
  });
  it('should not be able to signup when first name is invalid', (done) => {
    chai.request(app).post('/api/v1/auth/signup').send({
      firstName: 'Jorda1n',
      lastName: 'Manzi',
      email: 'jordan@gmail.com',
      password: 'danger',
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
      password: 'danger',
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
      password: 'danger',
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
      password: 'danger',
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
      password: 'danger',
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
      password: 'danger',
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
      password: 'dan',
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
      password: 'danger',
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
      password: 'danger',
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
      password: 'danger',
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
      password: 'danger',
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
      password: 'danger',
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
      password: 'danger',
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
      password: 'danger',
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
      password: 'danger',
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
      password: 'danger',
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
});