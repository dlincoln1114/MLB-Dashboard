require('dotenv').config();
const app = require('./src/app');
const { connectRedis } = require('./src/utils/cache');

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectRedis();
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(`Server failed to start: ${err.message}`);
  }
}

startServer();
