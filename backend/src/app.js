const express = require('express');
const morgan = require('morgan');
const mlbRoutes = require('./routes/mlb');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/mlb', mlbRoutes);

module.exports = app;