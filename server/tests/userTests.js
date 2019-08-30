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
        res.should.has.status(401);
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
  it('should be able to get all mentors', (done) => {
    chai.request(app).get('/api/v1/mentors').set('x-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJrYXlpbmFtdXJhMUBnbWFpbC5jb20iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjozMTU1OTE0NjZ9.mlJf4aSpoX-TrQXto6XHWKu5LLCHrrZZsrl9GGTlwKE')
      .end((err, res) => {
        res.should.has.status(200);
        done();
      });
  });
  it('should not be able to get all mentors when token not provided', (done) => {
    chai.request(app).get('/api/v1/mentors').set('x-token','')
      .end((err, res) => {
        res.should.has.status(401);
        done();
      });
  });
  it('should not be able to get all mentors when token is invalid', (done) => {
    chai.request(app).get('/api/v1/mentors').set('x-token','eyJhGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJrYXlpbmFtdXJhMUBnbWFpbC5jb20iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjozMTU1OTE0NjZ9.mlJf4aSpoX-TrQXto6XHWKu5LLCHrrZZsrl9GGTlwKE')
      .end((err, res) => {
        res.should.has.status(401);
        done();
      });
  });
  it('should be able to get a mentor', (done) => {
    const mentorId = 1;
    chai.request(app).get(`/api/v1/mentors/${mentorId}`).set('x-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJrYXlpbmFtdXJhMUBnbWFpbC5jb20iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjozMTU1OTE0NjZ9.mlJf4aSpoX-TrQXto6XHWKu5LLCHrrZZsrl9GGTlwKE')
      .end((err, res) => {
        res.should.has.status(200);
        done();
      });
  });
  it('should not be able to get a mentor when token not provided', (done) => {
    const mentorId = 1;
    chai.request(app).get(`/api/v1/mentors/${mentorId}`).set('x-token', '')
      .end((err, res) => {
        res.should.has.status(401);
        done();
      });
  });
  it('should not be able to get a mentor when token is invalid', (done) => {
    const mentorId = 1;
    chai.request(app).get(`/api/v1/mentors/${mentorId}`).set('x-token', 'eJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJrYXlpbmFtdXJhMUBnbWFpbC5jb20iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjozMTU1OTE0NjZ9.mlJf4aSpoX-TrQXto6XHWKu5LLCHrrZZsrl9GGTlwKE')
      .end((err, res) => {
        res.should.has.status(401);
        done();
      });
  });
  it('should not be able to get a mentor when id is not found', (done) => {
    const mentorId = 100;
    chai.request(app).get(`/api/v1/mentors/${mentorId}`).set('x-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJrYXlpbmFtdXJhMUBnbWFpbC5jb20iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjozMTU1OTE0NjZ9.mlJf4aSpoX-TrQXto6XHWKu5LLCHrrZZsrl9GGTlwKE')
      .end((err, res) => {
        res.should.has.status(404);
        done();
      });
  });
});

/* Session tests*/

describe('Session tests', () => {
  it('should be able to create mentorship request', (done => {
    chai.request(app).post('/api/v1/sessions').set('x-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJrYXlpbmFtdXJhMUBnbWFpbC5jb20iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNTY2NTQwNTA5fQ.I3kmd23CdJfzjonjY2p-0G1UmKHLu2yUHwK1oUhbk30')
    .send({
      mentorEmail: 'johndoe@gmail.com',
      questions: 'How to be a software developer?'
    }).end((err,res) => {
      res.should.have.status(201);
      done();
    })
  }));
  it('should not be able to create mentorship request when email is invalid', (done => {
    chai.request(app).post('/api/v1/sessions').set('x-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJrYXlpbmFtdXJhMUBnbWFpbC5jb20iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNTY2NTQwNTA5fQ.I3kmd23CdJfzjonjY2p-0G1UmKHLu2yUHwK1oUhbk30')
    .send({
      mentorEmail: 'johndoegmail.com',
      questions: 'How to be a software developer?'
    }).end((err,res) => {
      res.should.have.status(400);
      done();
    })
  }));
  it('should not be able to create mentorship request when questions is invalid', (done => {
    chai.request(app).post('/api/v1/sessions').set('x-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJrYXlpbmFtdXJhMUBnbWFpbC5jb20iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNTY2NTQwNTA5fQ.I3kmd23CdJfzjonjY2p-0G1UmKHLu2yUHwK1oUhbk30')
    .send({
      mentorEmail: 'johndoe@gmail.com',
      questions: 'Howtobeasoftwaredeveloper'
    }).end((err,res) => {
      res.should.have.status(400);
      done();
    })
  }));
  it('should not be able to create mentorship request when token is not provided', (done => {
    chai.request(app).post('/api/v1/sessions').set('x-token','')
    .send({
      mentorEmail: 'johndoe@gmail.com',
      questions: 'Howtobeasoftwaredeveloper?'
    }).end((err,res) => {
      res.should.have.status(401);
      done();
    })
  }));
  it('should not be able to create mentorship request when token is invalid', (done => {
    chai.request(app).post('/api/v1/sessions').set('x-token','eJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJrYXlpbmFtdXJhMUBnbWFpbC5jb20iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNTY2NTQwNTA5fQ.I3kmd23CdJfzjonjY2p-0G1UmKHLu2yUHwK1oUhbk30')
    .send({
      mentorEmail: 'johndoe@gmail.com',
      questions: 'How to be a software developer?'
    }).end((err,res) => {
      res.should.have.status(401);
      done();
    })
  }));
  it('should not be able to create mentorship request when is admin', (done => {
    chai.request(app).post('/api/v1/sessions').set('x-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvcmRhbmtheWluYW11cmFAZ21haWwuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTY2NDY2NDg3fQ.3nvpBIRh3NcoIlkfhpxP7tNSdgVDmsmYEbFVRy06nGA')
    .send({
      mentorEmail: 'johndoe@gmail.com',
      questions: 'How to be a software developer?'
    }).end((err,res) => {
      res.should.have.status(403);
      done();
    })
  }));
  it('should not be able to create mentorship request when is a mentor', (done => {
    chai.request(app).post('/api/v1/sessions').set('x-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5kb2VAZ21haWwuY29tIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU2NjU0MjIwNX0.PWdd88wtGe5Ay5dBF6PSuqJusCGEeq7vP6tj5thCedM')
    .send({
      mentorEmail: 'johndoe@gmail.com',
      questions: 'How to be a software developer?'
    }).end((err,res) => {
      res.should.have.status(403);
      done();
    })
  }));
  it('should not be able to create mentorship request when user not found', (done => {
    chai.request(app).post('/api/v1/sessions').set('x-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJrYXlpbmFtdXJhMUBnbWFpbC5jb20iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNTY2NTQwNTA5fQ.I3kmd23CdJfzjonjY2p-0G1UmKHLu2yUHwK1oUhbk30')
    .send({
      mentorEmail: 'johndoe1@gmail.com',
      questions: 'How to be a software developer?'
    }).end((err,res) => {
      res.should.have.status(401);
      done();
    })
  }));
  it('should not be able to create mentorship request when user not found', (done => {
    chai.request(app).post('/api/v1/sessions').set('x-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJrYXlpbmFtdXJhMUBnbWFpbC5jb20iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNTY2NTQwNTA5fQ.I3kmd23CdJfzjonjY2p-0G1UmKHLu2yUHwK1oUhbk30')
    .send({
      mentorEmail: 'jordankayinamura@gmail.com',
      questions: 'How to be a software developer?'
    }).end((err,res) => {
      res.should.have.status(401);
      done();
    })
  }));
  it('should be able to accept mentorship request', (done => {
    const id = 1;
    chai.request(app).patch(`/api/v1/sessions/${id}/accept`).set('x-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huZG9lQGdtYWlsLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE1NjY1NTQ0NjJ9.RUIe0LWAObia-sirOarbYIyT7XfyjM05_CpYTOX0JNw')
    .end((err,res) => {
      res.should.have.status(200);
      done();
    })
  }));
  it('should be able to accept mentorship request when is rejected', (done => {
    const id = 3;
    const session = {
      sessionId: 3,
      mentorId: 1,
      menteeId: 2,
      questions: 'How to be a businessman',
      menteeEmail: 'kayinamura@gmail.com',
      status: 'rejected'
    }
    chai.request(app).patch(`/api/v1/sessions/${id}/accept`).set('x-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huZG9lQGdtYWlsLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE1NjY1NTQ0NjJ9.RUIe0LWAObia-sirOarbYIyT7XfyjM05_CpYTOX0JNw')
    .end((err,res) => {
      res.should.have.status(200);
      done();
    })
  }));
  it('should not be able to accept mentorship request when token is not provided', (done => {
    const id = 1;
    chai.request(app).patch(`/api/v1/sessions/${id}/accept`).set('x-token','')
    .end((err,res) => {
      res.should.have.status(401);
      done();
    })
  }));
  it('should not be able to accept mentorship request when token is invalid', (done => {
    const id = 1;
    chai.request(app).patch(`/api/v1/sessions/${id}/accept`).set('x-token','eJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huZG9lQGdtYWlsLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE1NjY1NTQ0NjJ9.RUIe0LWAObia-sirOarbYIyT7XfyjM05_CpYTOX0JNw')
    .end((err,res) => {
      res.should.have.status(401);
      done();
    })
  }));
  it('should not be able to accept mentorship request when already accepted', (done => {
    const id = 1;
    const session = {
      sessionId: 1,
      mentorId: 1,
      menteeId: 2,
      questions: 'How to be a mentor?',
      menteeEmail: 'kayinamura1@gmail.com',
      status: 'accepted'
    }
    chai.request(app).patch(`/api/v1/sessions/${id}/accept`).set('x-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huZG9lQGdtYWlsLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE1NjY1NTQ0NjJ9.RUIe0LWAObia-sirOarbYIyT7XfyjM05_CpYTOX0JNw')
    .end((err,res) => {
      res.should.have.status(401);
      done();
    })
  }));
  it('should not be able to accept mentorship request when is not mentor', (done => {
    const id = 1;
    chai.request(app).patch(`/api/v1/sessions/${id}/accept`).set('x-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJrYXlpbmFtdXJhMUBnbWFpbC5jb20iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjozMTU1OTE0NjZ9.mlJf4aSpoX-TrQXto6XHWKu5LLCHrrZZsrl9GGTlwKE')
    .end((err,res) => {
      res.should.have.status(403);
      done();
    })
  }));
  it('should not be able to accept mentorship request when session is not found', (done => {
    const id = 109;
    chai.request(app).patch(`/api/v1/sessions/${id}/accept`).set('x-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huZG9lQGdtYWlsLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE1NjY1NTQ0NjJ9.RUIe0LWAObia-sirOarbYIyT7XfyjM05_CpYTOX0JNw')
    .end((err,res) => {
      res.should.have.status(404);
      done();
    })
  }));
  it('should be able to decline mentorship request when is pending', (done => {
    const id = 1;
    const sessions = 
      {
      sessionId: 1,
      mentorId: 1,
      menteeId: 2,
      questions: 'How to be a stoner',
      menteeEmail: 'kayinamura@gmail.com',
      status: 'pending'
      }
    chai.request(app).patch(`/api/v1/sessions/${id}/reject`).set('x-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huZG9lQGdtYWlsLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE1NjY1NTQ0NjJ9.RUIe0LWAObia-sirOarbYIyT7XfyjM05_CpYTOX0JNw')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      })
  }));
  it('should be able to decline mentorship request when is accepted', (done => {
    const id = 2;
    const session = {
      sessionId: 2,
      mentorId: 1,
      menteeId: 3,
      questions: 'How to be a businessman',
      menteeEmail: 'kayinamura1@gmail.com',
      status: 'accepted'
    }
    chai.request(app).patch(`/api/v1/sessions/${id}/reject`).set('x-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huZG9lQGdtYWlsLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE1NjY1NTQ0NjJ9.RUIe0LWAObia-sirOarbYIyT7XfyjM05_CpYTOX0JNw')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      })
  }));
  it('should not be able to decline mentorship request when token is not provided', (done => {
    const id = 1;
    chai.request(app).patch(`/api/v1/sessions/${id}/reject`).set('x-token', '')
      .end((err, res) => {
        res.should.have.status(401);
        done();
      })
  }));
  it('should not be able to decline mentorship request when token is invalid', (done => {
    const id = 1;
    chai.request(app).patch(`/api/v1/sessions/${id}/reject`).set('x-token', 'eJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huZG9lQGdtYWlsLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE1NjY1NTQ0NjJ9.RUIe0LWAObia-sirOarbYIyT7XfyjM05_CpYTOX0JNw')
      .end((err, res) => {
        res.should.have.status(401);
        done();
      })
  }));
  it('should not be able to decline mentorship request when already rejected', (done => {
    const id = 2;

    chai.request(app).patch(`/api/v1/sessions/${id}/reject`).set('x-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huZG9lQGdtYWlsLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE1NjY2ODkwMDh9.1wgK7VxfAUdCvmov43SGwfJSZC4-Rkefl6s3DZlETmo')
      .end((err, res) => {
        res.should.have.status(401);
        done();
      })
  }));

  it('should not be able to decline mentorship request when is not mentor', (done => {
    const id = 1;
    chai.request(app).patch(`/api/v1/sessions/${id}/reject`).set('x-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJrYXlpbmFtdXJhMUBnbWFpbC5jb20iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjozMTU1OTE0NjZ9.mlJf4aSpoX-TrQXto6XHWKu5LLCHrrZZsrl9GGTlwKE')
      .end((err, res) => {
        res.should.have.status(403);
        done();
      })
  }));
  it('should not be able to accept mentorship request when session is not found', (done => {
    const id = 109;
    chai.request(app).patch(`/api/v1/sessions/${id}/reject`).set('x-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huZG9lQGdtYWlsLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE1NjY1NTQ0NjJ9.RUIe0LWAObia-sirOarbYIyT7XfyjM05_CpYTOX0JNw')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      })
  }));
});

describe('Review Tests', () => {
 it('should be able to review session', (done => {
  const id = 3;
   chai.request(app).post(`/api/v1/sessions/${id}/review`).set('x-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJrYXlpbmFtdXJhQGdtYWlsLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjMxNTU2MzA0NH0.N9KiDevzI4rBJu6qW6HolNvR69zqsMX6m9NbEUbXG_0').send({
     score: 4,
     remark: 'Excellent mentor!'
   })
   .end((err,res) => {
     res.should.have.status(200);
     done();
   })
 }));
 it('should not be able to review session when score is less than 1', (done => {
  const id = 3;
   chai.request(app).post(`/api/v1/sessions/${id}/review`).set('x-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJrYXlpbmFtdXJhQGdtYWlsLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjMxNTU2MzA0NH0.N9KiDevzI4rBJu6qW6HolNvR69zqsMX6m9NbEUbXG_0').send({
     score: 0,
     remark: 'Excellent mentor!'
   })
   .end((err,res) => {
     res.should.have.status(400);
     done();
   })
 }));
 it('should not be able to review session when score is greater than 5', (done => {
  const id = 3;
   chai.request(app).post(`/api/v1/sessions/${id}/review`).set('x-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJrYXlpbmFtdXJhQGdtYWlsLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjMxNTU2MzA0NH0.N9KiDevzI4rBJu6qW6HolNvR69zqsMX6m9NbEUbXG_0').send({
     score: 10,
     remark: 'Excellent mentor!'
   })
   .end((err,res) => {
     res.should.have.status(400);
     done();
   })
 }));
 it('should not be able to review session when remark is empty', (done => {
  const id = 3;
   chai.request(app).post(`/api/v1/sessions/${id}/review`).set('x-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJrYXlpbmFtdXJhQGdtYWlsLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjMxNTU2MzA0NH0.N9KiDevzI4rBJu6qW6HolNvR69zqsMX6m9NbEUbXG_0').send({
     score: 4,
     remark: ''
   })
   .end((err,res) => {
     res.should.have.status(400);
     done();
   })
 }));
 it('should not be able to review session when remark is invalid', (done => {
  const id = 3;
   chai.request(app).post(`/api/v1/sessions/${id}/review`).set('x-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJrYXlpbmFtdXJhQGdtYWlsLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjMxNTU2MzA0NH0.N9KiDevzI4rBJu6qW6HolNvR69zqsMX6m9NbEUbXG_0').send({
     score: 4,
     remark: '@4335'
   })
   .end((err,res) => {
     res.should.have.status(400);
     done();
   })
 }));
 it('should not be able to review session when token not provided', (done => {
  const id = 3;
   chai.request(app).post(`/api/v1/sessions/${id}/review`).set('x-token','').send({
     score: 4,
     remark: 'Excellent mentor!'
   })
   .end((err,res) => {
     res.should.have.status(401);
     done();
   }); 
 }));
 it('should not be able to review session when token is invalid', (done => {
  const id = 3;
   chai.request(app).post(`/api/v1/sessions/${id}/review`).set('x-token','eJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJrYXlpbmFtdXJhQGdtYWlsLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjMxNTU2MzA0NH0.N9KiDevzI4rBJu6qW6HolNvR69zqsMX6m9NbEUbXG_0').send({
     score: 4,
     remark: 'Excellent mentor!'
   })
   .end((err,res) => {
     res.should.have.status(401);
     done();
   })
 }));
 it('should not be able to review session when session not found', (done => {
   const id = 19;
   chai.request(app).post(`/api/v1/sessions/${id}/review`).set('x-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJrYXlpbmFtdXJhQGdtYWlsLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjMxNTU2MzA0NH0.N9KiDevzI4rBJu6qW6HolNvR69zqsMX6m9NbEUbXG_0').send({
     score: 4,
     remark: 'Excellent mentor!'
   })
     .end((err, res) => {
       res.should.have.status(404);
       done();
     })
 }));
 it('should not be able to review session when token is not from the user who created the session', (done => {
  const id = 3;
   chai.request(app).post(`/api/v1/sessions/${id}/review`).set('x-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb3JkYW5rYXlpbmFtdXJhQGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MzE1NTYzODAxfQ.HaL0MCtPEvV0xQMXnvI0oKmfM0GL59TDh2HZqQ_WruE').send({
     score: 4,
     remark: 'Excellent mentor!'
   })
   .end((err,res) => {
     res.should.have.status(403);
     done();
   })
 }));
 it('should not be able to review session when the session is not accepted yet', (done => {
  const id = 1;
   chai.request(app).post(`/api/v1/sessions/${id}/review`).set('x-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJrYXlpbmFtdXJhQGdtYWlsLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE1NjcyMDcwMzl9.2BusG1GrUEm22CcBkJ-0faFY4yQKW4fsgCwyfwaLwnI').send({
     score: 4,
     remark: 'Excellent mentor!'
   })
   .end((err,res) => {
     res.should.have.status(403);
     done();
   })
 }));
});