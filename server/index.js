import bodyParser from 'body-parser';
import express from 'express';
import key from './config';

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ hi: 'there' });
});

if (!module.parent) {
  app.listen(port);
}

module.exports = app;
