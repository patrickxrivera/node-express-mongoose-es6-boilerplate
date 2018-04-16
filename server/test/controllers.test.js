import chai from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';

import * as code from '../utils/statusCodes';
import app from '../app';

const Driver = mongoose.model('driver');
const expect = chai.expect;

chai.use(chaiHttp);
