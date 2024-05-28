import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
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
export const login = async (req, res, next) => {
  // Write logic here
  const { email, password } = req.body;
  User.getUserByEmail(email, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      bcrypt.compare(password, result[0].password).then((isValid) => {
        if (!isValid) {
          return res.status(401).send('Invalid Password');
        }
      });
      const id = result[0].id;
      const token = jwt.sign({ id }, process.env.JWT_SCRET, {
        expiresIn: '1h',
      });
      res.cookie('token', token, { httpOnly: true });
      return res.status(200).send({ msg: 'Login successfully done' });
    }
  });
};
export const logout = (req, res, next) => {
  res.clearCookie('token');
  return res.send({ msg: 'Logout successfully done' });
};
export const profile = (req, res, next) => {
  // Write logic here
  res.send('profile');
};
