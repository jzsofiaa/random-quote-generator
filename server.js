const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '/views')));
app.use(express.static(path.join(__dirname, '/public')));

app.use(require('./routes/main.js'));
app.use(require('./routes/connection.js'));

app.listen(PORT, () => {
    console.log('Running at Port 5000');
});