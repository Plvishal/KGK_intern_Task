import con from '../../config/db.js';

const Item = {
  create: async (name, description, starting_price, image_url, end_time) => {
    const [rows] = await con.query(
      'INSERT INTO items (name, description, starting_price, current_price, image_url, end_time) VALUES (?, ?, ?, ?, ?, ?)',
      [name, description, starting_price, starting_price, image_url, end_time]
    );
    return rows;
  },

  findById: async (id) => {
    const [rows] = await con.query('SELECT * FROM items WHERE id = ?', [id]);
    return rows[0];
  },

  findByName: async (name) => {
    const [rows] = await con.query('SELECT * FROM items WHERE name = ?', [
      name,
    ]);
    return rows[0];
  },
  findAll: async (limit, offset) => {
    const [rows] = await con.query('SELECT * FROM items LIMIT ? OFFSET ?', [
      limit,
      offset,
    ]);
    return rows;
  },

  update: async (id, name, description, current_price, end_time, image_url) => {
    const [rows] = await con.query(
      'UPDATE items SET name = ?, description = ?, current_price = ?, end_time = ?, image_url = ? WHERE id = ?',
      [name, description, current_price, end_time, image_url, id]
    );
    return rows;
  },

  delete: async (id) => {
    const [rows] = await con.query('DELETE FROM items WHERE id = ?', [id]);
    return rows;
  },
};

export default Item;
