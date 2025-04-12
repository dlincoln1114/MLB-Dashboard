const axios = require('axios');
const { getCache, setCache } = require('../utils/cache');
const log = require('../utils/logger');

const BASE_URL = process.env.MLB_API_BASE_URL;

async function getStandings() {
  const cacheKey = 'mlb_standings';

  const cachedData = await getCache(cacheKey);
  if (cachedData) {
    log.info('Serving standings from cache');
    return JSON.parse(cachedData);
  }

  log.info('Fetching standings from MLB API...');
  const response = await axios.get(`${BASE_URL}/standings?leagueId=103,104&season=2024`);
  const data = response.data;

  await setCache(cacheKey, JSON.stringify(data), 600);
  log.success('Standings fetched and cached');

  return data;
}

module.exports = { getStandings };