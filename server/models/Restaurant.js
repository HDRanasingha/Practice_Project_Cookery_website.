// Assuming you have a db.js for database connection

const Restaurant = {
  getAll: async () => {
    const result = await pool.query('SELECT * FROM restaurants');
    return result.rows;
  },

  getById: async (id) => {
    const result = await pool.query('SELECT * FROM restaurants WHERE id = $1', [id]);
    return result.rows[0];
  },

  create: async (data) => {
    const { title, description, image } = data;
    const result = await pool.query(
      'INSERT INTO restaurants (title, description, image) VALUES ($1, $2, $3) RETURNING *',
      [title, description, image]
    );
    return result.rows[0];
  },

  update: async (id, data) => {
    const { title, description, image } = data;
    const result = await pool.query(
      'UPDATE restaurants SET title = $1, description = $2, image = $3 WHERE id = $4 RETURNING *',
      [title, description, image, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    await pool.query('DELETE FROM restaurants WHERE id = $1', [id]);
  },
};

export default Restaurant;



