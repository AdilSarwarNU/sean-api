const server = require('../server');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

process.env.LOG_SILENT = true;

chai.use(chaiHttp);

const API_PREFIX = '/v1';

let serverInstance = server.start(process.env.PORT || 3000);

describe('Welcome', () => {
  describe('/GET welcome', () => {
    it('it should return welcome message', (done) => {
      chai.request(serverInstance)
        .get(API_PREFIX + '/welcome')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          done();
        });
    });
  });
});

describe('Errors', () => {
  describe('/GET JSON 404 route', () => {
    it('it should return error message', (done) => {
      chai.request(serverInstance)
        .get(API_PREFIX + '/404')
        .set('Accept', 'application/json')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          done();
        });
    });
  });
  
  describe('/GET HTML 406 route', () => {
    it('it should return error message', (done) => {
      chai.request(serverInstance)
        .get(API_PREFIX + '/404')
        .set('Accept', 'text/html')
        .end((err, res) => {
          res.should.have.status(406);
          done();
        });
    });
  });
});
