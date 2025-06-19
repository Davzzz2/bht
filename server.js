const express = require('express');
const axios = require('axios');
const app = express();

app.use((req, res, next) => {
  // Allow cross-origin requests if needed
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/proxy-widget', async (req, res) => {
  try {
    const widgetUrl = 'https://bht.bet/widgets/bonus_list_boxed/Dg7uoDNctiTw4t5QahsiMftqSBvEdLlB';

    const response = await axios.get(widgetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
      }
    });

    res.setHeader('Content-Type', 'text/html');
    res.send(response.data);
  } catch (err) {
    res.status(500).send('Error fetching widget');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});