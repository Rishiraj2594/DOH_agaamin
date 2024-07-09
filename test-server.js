const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

// Serve static files (index.html, style.css, script.js)
app.use(express.static('public'));

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('csr.pem')
};

https.createServer(options, app).listen(443, '0.0.0.0',() => {
  console.log('HTTPS server running on port 443');
});

