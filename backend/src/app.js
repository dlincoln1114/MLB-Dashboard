const express = require('express');
const mlbService = require('./services/mlbService');
const app = express();

app.get('/standings', async (req, res) => {
  try {
    const standings = await mlbService.getStandings();
    res.json(standings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching standings', error: error.message });
  }
});

module.exports = app;

