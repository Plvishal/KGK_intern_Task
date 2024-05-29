import con from '../../config/db.js';

const User = {
  create: async (username, password, email, role, callback) => {
    const [rows] = await con.query(
      'INSERT INTO users (username,password,email,role) VALUES (?, ?, ?, ?)',
      [username, password, email, role],
      callback
    );
    return rows;
  },
  getUserByEmail: async (email) => {
    const [rows] = await con.query('SELECT * FROM users WHERE email= ?', [
      email,
    ]);
    return rows[0];
  },
  findById: async (id) => {
    const [rows] = await con.query('SELECT * FROM users WHERE id= ?', [id]);
    return rows[0];
  },
};

export default User;
