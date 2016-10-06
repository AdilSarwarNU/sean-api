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
