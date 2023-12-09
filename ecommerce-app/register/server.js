const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes.js')
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(cors({
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,  // enable set cookie with credentials
    optionsSuccessStatus: 204,  // respond to preflight requests with 204 (No Content)
}));

app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});