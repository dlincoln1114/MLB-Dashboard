require('dotenv').config();
const app = require('./src/app');
const { connectRedis } = require('./src/utils/cache');
const log = require('./src/utils/logger');

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectRedis();
    app.listen(PORT, () => {
      log.success(`Server is running at http://localhost:${PORT}`);
    });
  } catch (err) {
    log.error(`Server failed to start: ${err.message}`);
  }
}

startServer();
