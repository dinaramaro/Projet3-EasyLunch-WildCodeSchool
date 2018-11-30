import express from 'express';

import connection from './config';

const router = express.Router();

router.get('/cgv', (req, res) => {
  connection.query('SELECT * FROM admin_cgv', (err, results) => {
    if (err) {
      res.status(500).send('Erreur');
    } else {
      res.json(results);
    }
  });
});

export default router;
