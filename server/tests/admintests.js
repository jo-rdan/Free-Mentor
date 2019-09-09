import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import token from './helpers/tokens';

chai.use(chaiHttp);
chai.should();

describe('Admin authentication tests', () => {
  it('should be able to change user to mentor',(done) => {
    const id = 2;
    chai.request(app).patch(`/api/v2/user/${id}`).set('x-token',token.admin.real)
      .end((error,res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('should not be able to change to user when id is not found',(done) => {
    const id = 11;
    chai.request(app).patch(`/api/v2/user/${id}`).set('x-token',token.admin.real)
      .end((error,res) => {
        res.should.have.status(404);
        done();
      });
  });
  it('Admin cannot be changed to mentor',(done) => {
    const id = 1;
    chai.request(app).patch(`/api/v2/user/${id}`).set('x-token',token.admin.real)
      .end((error,res) => {
        res.should.have.status(403);
        done();
      });
  });
  it('should not be able to change to mentor when invalid token',(done) => {
    const id = 1;
    chai.request(app).patch(`/api/v2/user/${id}`).set('x-token',token.admin.fake)
      .end((error,res) => {
        res.should.have.status(401);
        done();
      });
  });
  it('should not be able to change to mentor when is not admin',(done) => {
    const id = 1;
    chai.request(app).patch(`/api/v2/user/${id}`).set('x-token',token.mentee.real)
      .end((error,res) => {
        res.should.have.status(403);
        done();
      });
  });
  it('should not be able to change to mentor when token not provided',(done) => {
    const id = 1;
    chai.request(app).patch(`/api/v2/user/${id}`).set('x-token', '')
      .end((error,res) => {
        res.should.have.status(401);
        done();
      });
  });
});

describe('Admin can delete a review', () => {
  it('should be able to delete review when token provided is from admin', (done) =>{
    const id = 4;
    chai.request(app).delete(`/api/v2/sessions/${id}/review`).set('x-token',token.admin.real)
      .end((error, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('should not be able to delete review when review not found', (done) =>{
    const id = 14;
    chai.request(app).delete(`/api/v2/sessions/${id}/review`).set('x-token',token.admin.real)
      .end((error, res) => {
        res.should.have.status(403);
        done();
      });
  });
});