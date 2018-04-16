import chai from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';

import * as code from '../utils/statusCodes';
import app from '../app';

const Driver = mongoose.model('driver');
const expect = chai.expect;

chai.use(chaiHttp);

describe('CONTROLLERS', () => {
  describe('DRIVER', () => {
    it('POST /api/driver/new - should create a driver', async () => {
      const oldCount = await Driver.count();

      const route = '/api/driver/new';
      const body = { email: 'test@test.com' };

      const res = await chai
        .request(app)
        .post(route)
        .send(body);

      const newCount = await Driver.count();

      expect(newCount).to.equal(oldCount + 1);
      expect(res.body.email).to.equal('test@test.com');
    });

    it('POST /api/driver/new - should return an error message when not given an email', async () => {
      const route = '/api/driver/new';
      const body = { email: undefined };

      const res = await chai
        .request(app)
        .post(route)
        .send(body);

      expect(res).to.have.status(code.STATUS_USER_ERROR);
      expect(res.body.error).to.be.a('string');
    });
  });
});
