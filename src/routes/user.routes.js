import express from 'express';
import {
  login,
  logout,
  profile,
  register,
} from '../controllers/user-controller.js';

const userRouter = express.Router();

userRouter.route('/register').post(register);
userRouter.route('/login').post(login);
userRouter.route('/profile').get(profile);
userRouter.route('/logout').get(logout);

export default userRouter;
