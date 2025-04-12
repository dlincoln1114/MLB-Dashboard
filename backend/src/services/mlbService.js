const axios = require('axios');
const { getCache, setCache } = require('../utils/cache');

const BASE_URL = process.env.MLB_API_BASE_URL;

async function getStandings() {
  const cacheKey = 'mlb_standings';

  const cachedData = await getCache(cacheKey);
  if (cachedData) {
    return JSON.parse(cachedData);
  }

  const response = await axios.get(`${BASE_URL}/standings?leagueId=103,104&season=2024`);
  const data = response.data;

  await setCache(cacheKey, JSON.stringify(data), 600);

  return data;
}

module.exports = { getStandings };

