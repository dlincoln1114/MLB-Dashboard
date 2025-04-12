const express = require('express');
const router = express.Router();
const { getStandings } = require('../services/mlbService');

router.get('/standings', async (req, res) => {
  try {
    const data = await getStandings();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch standings.' });
  }
});

module.exports = router;