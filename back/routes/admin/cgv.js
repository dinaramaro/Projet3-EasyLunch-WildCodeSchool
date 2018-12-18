import express from 'express';
import connection from '../config';

const router = express.Router();

router.get('/', (req, res) => {
  connection.query('SELECT * FROM admin_cgv', (err, results) => {
    if (err) {
      res.status(500).send('Erreur');
    } else {
      const result = results[0];
      res.json(result.cgv);
    }
  });
});

router.put('/update', (req, res) => {
  const { cgv } = req.body;
  connection.query('UPDATE admin_cgv SET cgv = ? WHERE id = 1', cgv, (err) => {
    if (err) {
      res.status(500).send('Erreur');
    } else {
      res.sendStatus(200);
    }
  });
});


export default router;
