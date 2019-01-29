import express from 'express';
import connection from '../config';

const router = express.Router();

router.get('/', (req, res) => {
  connection.query('SELECT politic FROM admin_politic', (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      const result = results[0];
      res.json(result.politic);
    }
  });
});

router.put('/', (req, res) => {
  const { politic } = req.body;
  connection.query('UPDATE admin_politic SET politic = ? WHERE id = 1', politic, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});


export default router;
