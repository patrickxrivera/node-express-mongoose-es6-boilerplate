import Driver from '../models/driver';

export const greeting = (req, res) => {
  res.send({ hi: 'there' });
};

export const create = async (req, res, next) => {
  const driverProps = req.body;

  Driver.create(driverProps)
    .then((driver) => res.send(driver))
    .catch(next);
};
