import express from 'express';
import connection from './config';

const router = express.Router();

router.get('/', (req, res) => {
  connection.query('SELECT * FROM admin_partners', (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

export default router;
