import express from 'express';
import connection from './config';

const router = express.Router();

router.get('/:search', (req, res) => {
  const search = `%${req.params.search}%`;
  connection.query('SELECT distinct id, name, description, lat, lon, address, picture, city FROM public_restaurants WHERE name LIKE ?', search, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Erreur');
    } else {
      res.json(results);
    }
  });
});

export default router;
