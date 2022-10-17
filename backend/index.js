const express = require('express');
const db = require('./config/db_config');
const apiRoutes = require('./routes/api');
require('dotenv').config();

const app = express();
const port = 3500;


app.use(express.json({ limit: '200mb' }))

app.use('/api', middlewareTest, apiRoutes);

function middlewareTest (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
}

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
    db();
});