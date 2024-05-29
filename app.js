import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import userRouter from './src/routes/user.routes.js';
import itemsRouter from './src/routes/items.routes.js';
import bidRouter from './src/routes/bid.routes.js';
import notificationRouter from './src/routes/notification.routes.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve('public')));
app.use(cookieParser());

app.use('/users', userRouter);
app.use('/items', itemsRouter);
app.use('/items', bidRouter);
app.use('/notification', notificationRouter);

export default app;
