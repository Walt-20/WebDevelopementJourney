import express from 'express';
import { getUsers, registerUser } from './server.js';

const app = express(); 

app.get("/data", async (req, res) => {
    const users = await getUsers();
    res.send(users);
})

app.use((err, req, res, next) => {
    res.status(500).send("Something broke!");
})

app.listen('3000', () => {
    console.log('Server started on port 3000');
})