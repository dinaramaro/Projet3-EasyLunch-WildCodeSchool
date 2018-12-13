import express from 'express';
import connection from '../config';

const router = express.Router();

router.get('/getmembers', (req, res) => {
  connection.query('SELECT * FROM admin_team', (err, results) => {
    if (err) {
      res.status(500).send('Erreur');
    } else {
      res.json(results);
    }
  });
});

router.get('/getmember/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM admin_team WHERE id = ?', id, (err, results) => {
    if (err) {
      res.status(500).send('Erreur');
    } else {
      res.json(results[0]);
    }
  });
});

router.put('/putmember/:id', (req, res) => {
  const id = req.params.id;
  const team = req.body;
  connection.query('UPDATE admin_team SET ? WHERE id = ?', [team, id], (err) => {
    if (err) {
      res.status(500).send('Erreur');
    } else {
      res.sendStatus(200);
    }
  });
});

router.delete('/deletemember/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM admin_team WHERE id = ?', id, (err) => {
    if (err) {
      res.status(500).send('Erreur');
    } else {
      res.sendStatus(200);
    }
  });
});

export default router;

