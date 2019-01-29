import express from 'express';
import connection from '../config';

const router = express.Router();

router.get('/', (req, res) => {
  connection.query('SELECT * FROM admin_team', (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM admin_team WHERE id = ?', id, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results[0]);
    }
  });
});

router.post('/', (req, res) => {
  const newMember = req.body;
  connection.query('INSERT INTO admin_team SET ?', newMember, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const team = req.body;
  connection.query('UPDATE admin_team SET ? WHERE id = ?', [team, id], (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM admin_team WHERE id = ?', id, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

export default router;
