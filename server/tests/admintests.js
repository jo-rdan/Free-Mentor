/* eslint-disable */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
chai.should();

describe('Admin authentication tests', () => {
  it('should be able to change user to mentor',(done) => {
    const id = 2;
    chai.request(app).patch(`/api/v1/user/${id}`).set('x-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvcmRhbmtheWluYW11cmFAZ21haWwuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTY2Mzk4MzgxfQ.cxaA2CcoMKimi8gc_yBr9ItjBx7eQfgw3Tv6tKZmbLA')
    .end((error,res) => {
      res.should.have.status(200);
      done();
    });
  });
  it('should not be able to change to user when id is not found',(done) => {
    const id = 11;
    chai.request(app).patch(`/api/v1/user/${id}`).set('x-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvcmRhbmtheWluYW11cmFAZ21haWwuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTY2Mzk4MzgxfQ.cxaA2CcoMKimi8gc_yBr9ItjBx7eQfgw3Tv6tKZmbLA')
    .end((error,res) => {
      res.should.have.status(404);
      done();
    });
  });
  it('Admin cannot be changed to mentor',(done) => {
    const id = 1;
    chai.request(app).patch(`/api/v1/user/${id}`).set('x-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvcmRhbmtheWluYW11cmFAZ21haWwuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTY2Mzk4MzgxfQ.cxaA2CcoMKimi8gc_yBr9ItjBx7eQfgw3Tv6tKZmbLA')
    .end((error,res) => {
      res.should.have.status(403);
      done();
    });
  });
  it('should not be able to change to mentor when invalid token',(done) => {
    const id = 1;
    chai.request(app).patch(`/api/v1/user/${id}`).set('x-token', 'eyJhbciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvcmRhbmtheWluYW11cmFAZ21haWwuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTY2Mzk4MzgxfQ.cxaA2CcoMKimi8gc_yBr9ItjBx7eQfgw3Tv6tKZmbLA')
    .end((error,res) => {
      res.should.have.status(401);
      done();
    });
  });
  it('should not be able to change to mentor when is not admin',(done) => {
    const id = 1;
    chai.request(app).patch(`/api/v1/user/${id}`).set('x-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvZXlyd2FuZGFAZ21haWwuY29tIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU2NjM5ODE5NH0.lvl7nkO2FoUraGTEsI05aL-Hrn-v6dFnCoFnPBbrVWM')
    .end((error,res) => {
      res.should.have.status(403);
      done();
    });
  });
  it('should not be able to change to mentor when token not provided',(done) => {
    const id = 1;
    chai.request(app).patch(`/api/v1/user/${id}`).set('x-token', '')
    .end((error,res) => {
      res.should.have.status(401);
      done();
    });
  });
});