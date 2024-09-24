const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const produtoRoutes = require('./routes/produtoRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', produtoRoutes);

module.exports = app;
