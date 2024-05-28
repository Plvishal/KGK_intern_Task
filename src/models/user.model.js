import { con } from '../../config/db.js';

const User = {
  create: (username, password, email, role, callback) => {
    con.query(
      'INSERT INTO users (username,password,email,role) VALUES (?, ?, ?, ?)',
      [username, password, email, role],
      callback
    );
  },
  getUserByEmail: (email, callback) => {
    con.query('SELECT * FROM users WHERE email= ?', [email], callback);
  },
};

export default User;
