import express from 'express';
import connection from './config';

const router = express.Router();

router.get('/infos/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT name, address, city, schedule FROM public_restaurants WHERE id = ?', id, (err, results) => {
    if (err) {
      res.status(500).send('Erreur');
    } else {
      res.json(results);
    }
  });
});

router.get('/menus/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM public_menu WHERE id_restaurant = ?', id, (err, results) => {
    if (err) {
      res.status(500).send('Erreur');
    } else {
      res.json(results);
    }
  });
});

export default router;
