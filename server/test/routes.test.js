import chai from 'chai';
import * as code from '../utils/statusCodes';

const chaiHttp = require('chai-http');
const server = require('../');

const expect = chai.expect;

chai.use(chaiHttp);

describe('API ROUTES', () => {
  describe('GET /api', () => {
    it('should get our homepage', async () => {
      const route = '/';
      const res = await chai.request(server).get(route);

      expect(res).to.have.status(code.STATUS_OK);
      expect(res.body.hi).to.equal('there');
    });
  });
});
