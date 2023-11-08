const express = require('express');
const router = express.Router();
const { fetchMongoDBData } = require('../db/mongoDBAPI');
const { fetchCombinedServerData } = require('../db/battlemetricsAPI');

router.get('/mongodbservers', async (req, res) => {
    try {
        const mongoDBServerData = await fetchMongoDBData();
        res.send(mongoDBServerData);
    } catch (error) {
        console.error('Error fetching data from MongoDB:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/bmservers', async (req, res) => {
    try {
      const combinedServerData = await fetchCombinedServerData();
      res.json(combinedServerData);
    } catch (error) {
      console.error('Error fetching combined server data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router;