import express from 'express';
import * as DriversController from '../controllers/drivers';

const router = express.Router();

router.get('/', DriversController.greeting);
router.post('/driver/new', DriversController.create);

export default router;
