import mysql from 'mysql'

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecommerce_store',
});

export default pool;