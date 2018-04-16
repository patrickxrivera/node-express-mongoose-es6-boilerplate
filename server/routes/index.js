import express from 'express';
import * as DriversController from '../controllers/drivers';

const router = express.Router();

router.get('/', DriversController.greeting);

export default router;
