import express from 'express';
import {
  createNotification,
  getNotication,
  markReadNotification,
} from '../controllers/notification..controller.js';
import { authenticate } from '../../middleware/verifyToken.js';
const notificationRouter = express.Router();
notificationRouter.route('/').get(authenticate, getNotication);
notificationRouter.route('/mark-read').post(authenticate, markReadNotification);

// Admin create

notificationRouter
  .route('/admin/createMsg')
  .post(authenticate, createNotification);
export default notificationRouter;
