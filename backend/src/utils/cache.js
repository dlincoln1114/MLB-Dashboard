const redis = require('redis');
const client = redis.createClient({
  url: process.env.REDIS_URL
});

client.on('error', (err) => console.error('Redis Client Error', err));

async function connectRedis() {
  await client.connect();
}

async function getCache(key) {
  return await client.get(key);
}

async function setCache(key, value, ttl) {
  await client.setEx(key, ttl, value);
}

module.exports = { connectRedis, getCache, setCache };
