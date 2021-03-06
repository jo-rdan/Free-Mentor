import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';
import app from '../app';
import users from './helpers/usersSignup';
import signin from './helpers/userSignin';
import token from './helpers/tokens';
import sessions from './helpers/sessions';
import session from './helpers/sessions';

dotenv.config();
chai.use(chaiHttp);
chai.should();

let id = 0;

describe('Catch any error', () => {
  it('should catch error when on a wrong route', (done) => {
    chai.request(app).get('/yutrtydf')
      .end((err, res) => {
        res.should.have.status(405);
        done();
      });
  });
});
describe('Authentication tests', () => {
  it('should be able to signup', (done) => {
    chai.request(app)
      .post('/api/v2/auth/signup').send(users[0])
      .end((err, res) => {      
        res.should.has.status(201);
        done();
      });
  });
  it('should not be able to signup when first name is invalid', (done) => {
    chai.request(app).post('/api/v2/auth/signup').send(users[1])
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when first name is empty', (done) => {
    chai.request(app).post('/api/v2/auth/signup').send(users[2])
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when last name is invalid', (done) => {
    chai.request(app).post('/api/v2/auth/signup').send(users[4])
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when email is invalid', (done) => {
    chai.request(app).post('/api/v2/auth/signup').send(users[5])
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when password is empty', (done) => {
    chai.request(app).post('/api/v2/auth/signup').send(users[7])
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when password has less than 5 characters', (done) => {
    chai.request(app).post('/api/v2/auth/signup').send(users[8])
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when address is empty ', (done) => {
    chai.request(app).post('/api/v2/auth/signup').send(users[9])
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when address is invalid ', (done) => {
    chai.request(app).post('/api/v2/auth/signup').send(users[10])
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when bio is invalid ', (done) => {
    chai.request(app).post('/api/v2/auth/signup').send(users[11])
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when bio is empty ', (done) => {
    chai.request(app).post('/api/v2/auth/signup').send(users[12])
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when occupation is empty ', (done) => {
    chai.request(app).post('/api/v2/auth/signup').send(users[13])
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when occupation is invalid', (done) => {
    chai.request(app).post('/api/v2/auth/signup').send(users[14])
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when expertise is empty', (done) => {
    chai.request(app).post('/api/v2/auth/signup').send(users[15])
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when expertise is invalid', (done) => {
    chai.request(app).post('/api/v2/auth/signup').send(users[16])
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to signup when email already exists', (done) => {
    chai.request(app).post('/api/v2/auth/signup').send(users[0])
      .end((err, res) => {
        res.should.has.status(409);
        done();
      });
  });

  it('should not be able to signup when all fields are empty', (done) => {
    chai.request(app).post('/api/v2/auth/signup').send(users[18])
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should be able to sign in', (done) => {
    chai.request(app).post('/api/v2/auth/signin').send(signin[0])
      .end((err, res) => {
        res.should.has.status(200);
        done();
      });
  });
  it('should not be able to sign in when email is empty', (done) => {
    chai.request(app).post('/api/v2/auth/signin').send(signin[3])
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to sign in when email is invalid', (done) => {
    chai.request(app).post('/api/v2/auth/signin').send(signin[4])
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to sign in when password is empty', (done) => {
    chai.request(app).post('/api/v2/auth/signin').send(signin[5])
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to sign in when password is less than 5 characters', (done) => {
    chai.request(app).post('/api/v2/auth/signin').send(signin[6])
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('should not be able to sign in when email is incorrect', (done) => {
    chai.request(app).post('/api/v2/auth/signin').send(signin[7])
      .end((err, res) => {
        res.should.has.status(401);
        done();
      });
  });
  it('should not be able to sign in when passsword is incorrect', (done) => {
    chai.request(app).post('/api/v2/auth/signin').send(signin[8])
      .end((err, res) => {
        res.should.has.status(401);
        done();
      });
  });
  it('any error', (done) => {
    chai.request(app).post('/api/v2/auth/signin').send(signin[9])
      .end((err, res) => {        
        res.should.has.status(500);
        done();
      });
  });
  it('should be able to get all mentors', (done) => {
    chai.request(app).get('/api/v2/mentors').set('x-token', token.mentee.real)
      .end((err, res) => {
        res.should.has.status(200);
        done();
      });
  });
  it('should not be able to get all mentors when token not provided', (done) => {
    chai.request(app).get('/api/v2/mentors').set('x-token', '')
      .end((err, res) => {
        res.should.has.status(401);
        done();
      });
  });
  it('should not be able to get all mentors when is mentor', (done) => {
    chai.request(app).get('/api/v2/mentors').set('x-token', token.mentor.real)
      .end((err, res) => {        
        res.should.has.status(403);
        done();
      });
  });
  it('should not be able to get all mentors when token is invalid', (done) => {
    chai.request(app).get('/api/v2/mentors').set('x-token', token.mentee.fake)
      .end((err, res) => {        
        res.should.has.status(401);
        done();
      });
  });
  it('should be able to get a mentor', (done) => {
    chai.request(app).get(`/api/v2/mentors/${2}`).set('x-token', token.mentee.real)
      .end((err, res) => {
        res.should.has.status(200);
        done();
      });
  });
  it('should not be able to get a mentor when token not provided', (done) => {
    const mentorId = 1;
    chai.request(app).get(`/api/v2/mentors/${mentorId}`).set('x-token', '')
      .end((err, res) => {
        res.should.has.status(401);
        done();
      });
  });
  it('should not be able to get a mentor when token is invalid', (done) => {
    const mentorId = 1;
    chai.request(app).get(`/api/v2/mentors/${mentorId}`).set('x-token', token.mentee.fake)
      .end((err, res) => {
        res.should.has.status(401);
        done();
      });
  });
  it('should not be able to get a mentor when id is not found', (done) => {
    const mentorId = 100;
    chai.request(app).get(`/api/v2/mentors/${mentorId}`).set('x-token', token.mentee.real)
      .end((err, res) => {
        res.should.has.status(404);
        done();
      });
  });
});

/* Session tests*/

describe('Session tests', () => {
  it('should be able to create mentorship request', (done) => {
    chai.request(app).post('/api/v2/sessions').set('x-token', token.mentee.real)
      .send(sessions[0]).end((err, res) => {
        res.should.have.status(201);
        done();
      })
  });
  it('should not be able to create mentorship request when already exist', (done) => {
    chai.request(app).post('/api/v2/sessions').set('x-token', token.mentee.real)
      .send(sessions[0]).end((err, res) => {
        res.should.have.status(409);
        done();
      })
  });
  it('should not be able to create mentorship request when email is invalid', ((done) => {
    chai.request(app).post('/api/v2/sessions').set('x-token', token.mentee.real)
      .send(sessions[2]).end((err, res) => {
        res.should.have.status(400);
        done();
      })
  }));
  it('should not be able to create mentorship request when questions is invalid', ((done) => {
    chai.request(app).post('/api/v2/sessions').set('x-token', token.mentee.real)
      .send(sessions[3]).end((err, res) => {
        res.should.have.status(400);
        done();
      })
  }));
  it('should not be able to create mentorship request when token is not provided', ((done) => {
    chai.request(app).post('/api/v2/sessions').set('x-token', '')
      .send(sessions[0]).end((err, res) => {
        res.should.have.status(401);
        done();
      })
  }));
  it('should not be able to create mentorship request when token is invalid', ((done) => {
    chai.request(app).post('/api/v2/sessions').set('x-token',token.mentee.fake)
      .send({
        mentorEmail: 'johndoe@gmail.com',
        questions: 'How to be a software developer?'
      }).end((err, res) => {
        
        res.should.have.status(401);
        done();
      })
  }));
  it('should not be able to create mentorship request when is admin', ((done) => {
    chai.request(app).post('/api/v2/sessions').set('x-token',token.admin.real)
      .send(sessions[0]).end((err, res) => {
        res.should.have.status(403);
        done();
      })
  }));
  it('should not be able to create mentorship request when is a mentor', ((done) => {
    chai.request(app).post('/api/v2/sessions').set('x-token',token.mentor.real)
      .send(sessions[0]).end((err, res) => {
        res.should.have.status(403);
        done();
      })
  }));
  it('should not be able to create mentorship request when user not found', ((done) => {
    chai.request(app).post('/api/v2/sessions').set('x-token',token.mentee.fake)
      .send(sessions[0]).end((err, res) => {
        
        
        res.should.have.status(401);
        done();
      })
  }));
  it('should be able to accept mentorship request', ((done) => {
    const id = 1;
    chai.request(app).patch(`/api/v2/sessions/${id}/accept`).set('x-token',token.mentor.real)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      })
  }));
  it('should not be able to accept mentorship request when token is not provided', ((done) => {
    const id = 1;
    chai.request(app).patch(`/api/v2/sessions/${id}/accept`).set('x-token', '')
      .end((err, res) => {
        res.should.have.status(401);
        done();
      })
  }));
  it('should not be able to accept mentorship request when token is invalid', ((done) => {
    const id = 1;
    chai.request(app).patch(`/api/v2/sessions/${id}/accept`).set('x-token',token.mentor.fake)
      .end((err, res) => {
        res.should.have.status(401);
        done();
      })
  }));
  it('should not be able to accept mentorship request when already accepted', ((done) => {
    const id = 1;
    chai.request(app).patch(`/api/v2/sessions/${id}/accept`).set('x-token',token.mentor.real)
      .end((err, res) => {
        res.should.have.status(409);
        done();
      })
  }));
  it('should not be able to accept mentorship request when is not mentor', ((done) => {
    const id = 1;
    chai.request(app).patch(`/api/v2/sessions/${id}/accept`).set('x-token',token.mentee.real)
      .end((err, res) => {        
        res.should.have.status(403);
        done();
      })
  }));
  it('should not be able to accept mentorship request when session is not found', ((done) => {
    const id = 109;
    chai.request(app).patch(`/api/v2/sessions/${id}/accept`).set('x-token',token.mentor.real)
      .end((err, res) => {
        res.should.have.status(404);
        done();
      })
  }));
  it('should be able to decline mentorship request when is pending', ((done) => {
    const id = 1;
    chai.request(app).patch(`/api/v2/sessions/${id}/reject`).set('x-token',token.mentor.real)
      .end((err, res) => {        
        res.should.have.status(200);
        done();
      })
  }));
    it('should be able to accept mentorship request when is rejected', ((done) => {
    const id = 1;
    chai.request(app).patch(`/api/v2/sessions/${id}/accept`).set('x-token',token.mentor.real)
      .end((err, res) => {        
        res.should.have.status(200);
        done();
      })
  }));
  it('should be able to decline mentorship request when is accepted', ((done) => {
    const id = 1;
    chai.request(app).patch(`/api/v2/sessions/${id}/reject`).set('x-token',token.mentor.real)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      })
  }));
  it('should not be able to decline mentorship request when token is not provided', ((done) => {
    const id = 1;
    chai.request(app).patch(`/api/v2/sessions/${id}/reject`).set('x-token', '')
      .end((err, res) => {
        res.should.have.status(401);
        done();
      })
  }));
  it('should not be able to decline mentorship request when token is invalid', ((done) => {
    const id = 1;
    chai.request(app).patch(`/api/v2/sessions/${id}/reject`).set('x-token',token.mentor.fake)
      .end((err, res) => {
        res.should.have.status(401);
        done();
      })
  }));
  it('should not be able to decline mentorship request when already rejected', ((done) => {
    const id = 1;
    chai.request(app).patch(`/api/v2/sessions/${id}/reject`).set('x-token',token.mentor.real)
      .end((err, res) => {
        res.should.have.status(409);
        done();
      })
  }));

  it('should not be able to decline mentorship request when is not mentor', ((done) => {
    const id = 1;
    chai.request(app).patch(`/api/v2/sessions/${id}/reject`).set('x-token',token.mentee.real)
      .end((err, res) => {
        res.should.have.status(403);
        done();
      })
  }));
  it('should not be able to accept mentorship request when session is not found', ((done) => {
    const id = 109;
    chai.request(app).patch(`/api/v2/sessions/${id}/reject`).set('x-token',token.mentor.real)
      .end((err, res) => {
        res.should.have.status(404);
        done();
      })
  }));
});
