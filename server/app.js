import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';

import * as code from './utils/statusCodes';
import key from './config';
import router from './routes';

mongoose.Promise = global.Promise;

if (process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost/muber');
}

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router);

// Custom middleware for error handling
app.use((err, req, res, next) => {
  res.status(code.STATUS_USER_ERROR).send({ error: err.message });
});

export default app;
