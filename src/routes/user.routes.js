import express from 'express';
import {
  login,
  logout,
  profile,
  register,
} from '../controllers/user-controller.js';
import verifyToken from '../../middleware/verifyToken.js';

const userRouter = express.Router();

userRouter.route('/register').post(register);
userRouter.route('/login').post(login);
userRouter.route('/profile').get(verifyToken, profile);
userRouter.route('/logout').get(logout);

export default userRouter;
