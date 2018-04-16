import chai from 'chai';
import chaiHttp from 'chai-http';

import initTestSetup from './testSetup';
import * as code from '../utils/statusCodes';
import app from '../app';

const expect = chai.expect;

initTestSetup();
chai.use(chaiHttp);

describe('ROUTES', () => {
  describe('GET /api', () => {
    it('should get our homepage', async () => {
      const route = '/api';
      const res = await chai.request(app).get(route);

      expect(res).to.have.status(code.STATUS_OK);
      expect(res.body.hi).to.equal('there');
    });
  });
});
