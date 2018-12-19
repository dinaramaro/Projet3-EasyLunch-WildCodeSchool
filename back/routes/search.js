import express from 'express';
import connection from './config';

const router = express.Router();

router.get('/', (req, res) => {
  const keyword = `%${req.query.keyword}%`;
  const personcapacity = req.query.personcapacity;
  connection.query('SELECT DISTINCT name, description, lat, lon, address, picture, person_capacity FROM public_restaurants WHERE name LIKE ? AND person_capacity >= ?', [keyword, personcapacity], (err, results) => {
    if (err) {
      res.status(500).send('Erreur');
    } else {
      res.json(results);
    }
  });
});

export default router;
