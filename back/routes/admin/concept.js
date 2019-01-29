import express from 'express';
import connection from '../config';

const router = express.Router();

router.get('/', (req, res) => {
  connection.query('SELECT concept FROM admin_concept', (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      const result = results[0];
      res.json(result.concept);
    }
  });
});

router.put('/', (req, res) => {
  const { concept } = req.body;
  connection.query('UPDATE admin_concept SET concept = ? WHERE id = 1', concept, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});


export default router;
