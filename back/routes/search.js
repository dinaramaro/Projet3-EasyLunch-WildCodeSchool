import express from 'express';
import connection from './config';

const router = express.Router();

router.get('/', (req, res) => {
  const keyword = `%${req.query.keyword}%`;
  const personcapacity = req.query.personcapacity;
  connection.query('SELECT DISTINCT id, name, description, lat, lon, address, picture, city, person_capacity FROM public_restaurants WHERE name LIKE ? OR address like ? OR city LIKE ? OR description LIKE ? AND person_capacity >= ?', [keyword, keyword, keyword, keyword, personcapacity], (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

export default router;
