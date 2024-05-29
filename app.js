import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import userRouter from './src/routes/user.routes.js';
import itemsRouter from './src/routes/items.routes.js';
import bidRouter from './src/routes/bid.routes.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve('public')));
app.use(cookieParser());

app.use('/users', userRouter);
app.use('/items', itemsRouter);
app.use('/items', bidRouter);

export default app;
