import express from 'express';
import connection from './config';

const router = express.Router();

router.get('/search/:search', (req, res) => {
  const search = `%${req.params.search}%`;
  connection.query('SELECT name FROM public_restaurants WHERE name LIKE ?', search, (err, results) => {
    if (err) {
      res.status(500).send('Erreur');
    } else {
      res.json(results);
    }
  });
});

export default router;
