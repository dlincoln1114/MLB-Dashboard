const express = require('express');
const { getStandings } = require('../services/mlbService');

const router = express.Router();

router.get('/standings', async (req, res) => {
  try {
    const standings = await getStandings();
    res.json(standings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
