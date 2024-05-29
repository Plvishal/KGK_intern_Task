import con from '../../config/db.js';

const Notification = {
  create: async (user_id, message, is_read = false) => {
    const [rows] = await con.query(
      'INSERT INTO notifications (user_id, message, is_read) VALUES (?, ?, ?)',
      [user_id, message, is_read]
    );
    return rows;
  },

  findByUserId: async (user_id) => {
    const [rows] = await con.query(
      'SELECT * FROM notifications WHERE user_id = ?',
      [user_id]
    );
    return rows;
  },

  markAsRead: async (user_id) => {
    const [rows] = await con.query(
      'UPDATE notifications SET is_read = ? WHERE user_id = ?',
      [true, user_id]
    );
    return rows;
  },
};

export default Notification;
