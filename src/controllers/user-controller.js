import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const register = async (req, res, next) => {
  const { username, password, email, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const userExits = await User.getUserByEmail(email);
    if (userExits) {
      return res.status(200).send({ msg: 'User already register' });
    }
    const user = await User.create(username, hashedPassword, email, role);
    return res
      .status(201)
      .send({ message: 'User registered successfully', user });
  } catch (err) {
    return res.status(500).json({ message: 'Error registering user' });
  }
};
export const login = async (req, res, next) => {
  // Write logic here
  const { email, password } = req.body;
  const userExits = await User.getUserByEmail(email);
  // checking user exits or not
  if (!userExits) {
    return res.status(200).send({ msg: "User doesn't exits " });
  }
  // checking password
  const isPassword = await bcrypt.compare(password, userExits.password);
  if (!isPassword) {
    return res.status(401).send({ msg: 'Invalid Password' });
  }
  const token = await jwt.sign({ id: userExits.id }, process.env.JWT_SCRET, {
    expiresIn: '1h',
  });
  res.cookie('token', token, { httpOnly: true });
  return res.status(200).send({ msg: 'Login successfully done ' });
};
export const logout = (req, res, next) => {
  res.clearCookie('token');
  return res.send({ msg: 'Logout successfully done' });
};
export const profile = (req, res, next) => {
  // Write logic here
  res.send('profile');
};
