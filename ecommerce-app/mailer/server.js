// server.js
const express = require('express');
const appRoute = require('./routes/route.js');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// routes
app.use(cors({ origin: 'http://localhost:4200' }));

app.use('/api', appRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
