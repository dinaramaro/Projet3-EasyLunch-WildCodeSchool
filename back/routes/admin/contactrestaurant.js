import express from 'express';
import connection from '../config';

const router = express.Router();

router.get('/', (req, res) => {
  connection.query('SELECT * from admin_contact_restaurant_text WHERE id = 1', (err, results) => {
    if (err) {
      res.status(500).send('Erreur');
    } else {
      const result = results[0];
      res.json(result.text);
    }
  });
});

export default router;
