import express from 'express';
import {
  getNotication,
  markReadNotification,
} from '../controllers/notification..controller.js';
import { authenticate } from '../../middleware/verifyToken.js';
const notificationRouter = express.Router();
notificationRouter.route('/').get(authenticate, getNotication);
notificationRouter.route('/mark-read').post(authenticate, markReadNotification);

export default notificationRouter;
