// server.js

require('dotenv').config();
const express = require('express');
const app = require('./src/app');
const { connectRedis } = require('./src/utils/cache');

const PORT = 3001

const startServer = async () => {
  try {
    await connectRedis();
    
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error.message);
    process.exit(1);
  }
};

startServer();

