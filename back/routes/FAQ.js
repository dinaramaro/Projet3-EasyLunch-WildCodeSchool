import express from 'express';

import connection from './conf';

const router = express.Router();

/* GET index page. */
router.get('/faq', (req, res) => {
  connection.query('SELECT * FROM about_FAQ', (err, results) => {
    if (err) {
      res.status(500).send('Erreur');
    } else {
      res.json(results);
    }
  });
});

export default router;
