import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config()

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecommerce_store',
}).promise()

export async function getUsers() {
    const [rows] = await pool.query('SELECT * FROM Users');
    return rows;
}

export async function registerUser(username, password, email, name) {
    const [result] = await pool.query(`
    INSERT INTO Users (username, password, email, name)
    VALUE (?, ?, ?, ?)
    `, [username, password, email, name])
    return result;
}