const db = require('../config/database');

const createTable = `
  CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`;

db.query(createTable, (err) => {
  if (err) throw err;
  console.log('Posts table created.');
});

module.exports = db;
