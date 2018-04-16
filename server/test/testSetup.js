import mongoose from 'mongoose';

export default () => {
  before((done) => {
    mongoose.connect('mongodb://localhost/notes_app_test');
    mongoose.connection.once('open', () => done()).on('error', (error) => {
      console.warn('Warning', error);
    });
  });

  beforeEach((done) => {
    const { drivers } = mongoose.connection.collections;
    drivers
      .drop()
      .then(() => done())
      .catch(() => done());
  });
};
