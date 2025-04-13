@echo off
echo Starting MLB Dashboard Backend...
set NODE_ENV=development
set PORT=3001
echo Starting the server on port %PORT%...

npm install
node server.js
