import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import userRouter from './src/routes/user.routes.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve('public')));
app.use(cookieParser());

app.use('/users', userRouter);

export default app;
