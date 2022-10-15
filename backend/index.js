const express = require('express'); 
const app = express();
const port = 3500;
const db = require('./config/db_config');

app.use(express.json())
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
    db();
});