const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const PORT = 3000;

app.use(express.static(path.join(__dirname, '../public/dist')));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

// Course Routes
app.use('/course', require('../routes/router'));

app.listen(PORT, () => console.log('Server running on port, ', PORT));
