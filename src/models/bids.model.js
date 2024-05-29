import con from '../../config/db.js';

const Bid = {
  create: async (item_id, user_id, bid_amount) => {
    const [rows] = await con.query(
      'INSERT INTO bids (item_id, user_id, bid_amount) VALUES (?, ?, ?)',
      [item_id, user_id, bid_amount]
    );
    return rows;
  },

  findByItemId: async (item_id) => {
    const [rows] = await con.query('SELECT * FROM bids WHERE item_id = ?', [
      item_id,
    ]);
    return rows;
  },
};

export default Bid;
