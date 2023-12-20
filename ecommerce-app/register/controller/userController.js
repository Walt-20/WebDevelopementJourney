const { pool } = require('./db.js');

const registerUser = async (req, res) => {
    const { userName, password, email, name } = req.body;
    pool.getConnection((err, connection) => {
        if (err) {
          console.error('Error connecting to MySQL:', err);
          return res.status(500).json({ message: 'Internal server error' });
        }
    
        // Check if the user already exists
        connection.query('SELECT * FROM users WHERE username = ?', [userName], (selectErr, results) => {
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
          connection.query('INSERT INTO users (username, password, email, name) VALUES (?, ?, ?, ?)', [userName, password, email, name], (insertErr) => {
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

const loginUser = async (req, res) => {
  const { userName, password } = req.body;
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [userName, password], (selectErr, results) => {
      if (selectErr) {
        console.error('Error querying MySQL:', selectErr);
        connection.release();
        return res.status(500).json({ message: 'Internal server error' });
      }

      if (results.length === 0) {
        connection.release();
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      res.status(200).json({ message: 'User logged in successfully' });
    });
  });
};

module.exports = {
  registerUser, loginUser
};