import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
export const register = async (req, res, next) => {
  // Write logic here
  const { username, email, password, role } = req.body;
  // Check user already register or not
  const hashpassword = await bcrypt.hash(password, 10);
  User.getUserByEmail(email, (err, result) => {
    if (err) {
      return res.status(500).send(' Server Error');
    } else if (result.length > 0) {
      return res.send({ msg: 'You are already register' });
    } else {
      User.create(username, hashpassword, email, role, (err, result) => {
        if (err) {
          return res.status(500).send('Server Error');
        }

        return res.status(201).send({ msg: 'User created' });
      });
    }
  });
};
export const login = (req, res, next) => {
  // Write logic here
  res.send('login');
};
export const profile = (req, res, next) => {
  // Write logic here
  res.send('profile');
};
