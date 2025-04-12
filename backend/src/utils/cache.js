const redis = require('redis');
const log = require('./logger');

let client;

async function connectRedis() {
  client = redis.createClient({ url: process.env.REDIS_URL });

  client.on('error', err => log.error(`Redis error: ${err}`));
  client.on('connect', () => log.info('Redis client connecting...'));
  client.on('ready', () => log.success('Redis connected and ready.'));

  await client.connect();
}

module.exports = {
  connectRedis,
  getCache: async (key) => {
    log.info(`Checking cache for key: ${key}`);
    return await client.get(key);
  },
  setCache: async (key, value, ttl = 600) => {
    log.info(`Setting cache for key: ${key} (ttl: ${ttl}s)`);
    await client.setEx(key, ttl, value);
  }
};