import express from 'express';
import connection from '../config';

const router = express.Router();

router.get('/', (req, res) => {
  connection.query('SELECT name, id FROM public_code WHERE free = 1 ORDER BY RAND() LIMIT 1', (err, results) => {
    if (err) {
      res.status(500).send(`Erreur: ${err}`);
    } else {
      const result = results[0];
      res.json(result);

      connection.query('UPDATE public_code SET free = 0 WHERE name = ?', result.name, (error) => {
        if (error) {
          res.status(500).send(`Erreur: ${error}`);
        } else {
          res.status(200);
        }
      });
    }
  });
});

export default router;
