import express from 'express';
import connection from '../config';

const router = express.Router();

router.get('/partners', (req, res) => {
  connection.query('SELECT * FROM admin_partners', (err, results) => {
    if (err) {
      res.status(500).send('Erreur');
    } else {
      res.json(results);
    }
  });
});

router.delete('/deletepartner/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM admin_partners WHERE id = ?', id, (err) => {
    if (err) {
      res.status(500).send('Erreur');
    } else {
      res.sendStatus(200);
    }
  });
});

export default router;
