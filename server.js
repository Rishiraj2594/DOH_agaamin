const express = require('express');
const dns = require('dns');
const { json } = require('express/lib/response');

const app = express();
const port = 3000; // You can change the port if needed

app.use(express.json());

app.post('/dns-query', (req, res) => {
  const { name, type } = req.body;

  if (!name || !type) {
    return res.status(400).json({ error: 'Please provide both name and type.' });
  }

  dns.setServers(['139.144.68.242']);

  dns.resolve(name, type, (err, records) => {
   if (err) {
     console.error('Error:', err.message);
     return;
   }

      res.json(records);
   });  
});

app.listen(port, () => {
});
