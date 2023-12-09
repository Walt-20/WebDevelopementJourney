import pool from './db.js';

const register = async (req, res) => {
    const { username, password, email, name } = req.body;
    pool.getConnection((err, connection) => {
        if (err) {
          console.error('Error connecting to MySQL:', err);
          return res.status(500).json({ message: 'Internal server error' });
        }
    
        // Check if the user already exists
        connection.query('SELECT * FROM users WHERE username = ?', [username], (selectErr, results) => {
          if (selectErr) {
            console.error('Error querying MySQL:', selectErr);
            connection.release();
            return res.status(500).json({ message: 'Internal server error' });
          }
    
          if (results.length > 0) {
            connection.release();
            return res.status(409).json({ message: 'User already exists' });
          }
    
          // Insert a new user
          connection.query('INSERT INTO users (username, email) VALUES (?, ?)', [username, email], (insertErr) => {
            connection.release();
    
            if (insertErr) {
              console.error('Error inserting into MySQL:', insertErr);
              return res.status(500).json({ message: 'Internal server error' });
            }
    
            res.status(201).json({ message: 'User registered successfully' });
          });
        });
    });
};

export default { register };