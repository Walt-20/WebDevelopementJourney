import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: 'admin',
    port: '3306',
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

async function getUsers() {
    const res = await pool.query('SELECT * FROM User');
    console.log(res);
}

const users = await getUsers();
console.log(users);