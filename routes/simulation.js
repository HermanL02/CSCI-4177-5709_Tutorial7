const express = require('express');
import Portfolio from '../schemas/simulation';
const router = express.Router();

// GET /holdings
router.get('/', (req, res) => {
  Holding.find({}, (err, holdings) => {
    if (err) {
      console.error(err);
      res.status(500).send('Server error');
    } else {
      res.json(holdings);
    }
  });
});

router.get("/simulation/:account_id", async function (req, res) {
    await Portfolio.findOne({ id: req.params.account_id })
      .then((docs) => {
        res.send(docs);
      })
      .catch((err) => {
        console.error(err);
      });
  });

// POST /holdings
router.post('/', (req, res) => {
  Holding.create(req.body, (err, holding) => {
    if (err) {
      console.error(err);
      res.status(500).send('Server error');
    } else {
      res.json(holding);
    }
  });
});

module.exports = router;
