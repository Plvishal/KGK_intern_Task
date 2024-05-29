import express from 'express';
import { getNotication, markReadNotification } from '../controllers/notification..controller.js';

const notificationRouter = express.Router();
notificationRouter.route('/').get(getNotication);
notificationRouter.route('/mark-read').post(markReadNotification);

export default notificationRouter;
