import express from 'express';

import connection from '../config';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
  connection.query('SELECT * FROM admin_faq', (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

/* GET id Question. */
router.get('/:id', (req, res) => {
  const idQuestion = req.params.id;
  connection.query('SELECT * FROM admin_faq WHERE id = ?', [idQuestion], (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

/* PUT MODIFIER Question. */
router.put('/:id', (req, res) => {
  const idQuestion = req.params.id;
  const formData = req.body;
  connection.query('UPDATE admin_faq SET? WHERE id = ?', [formData, idQuestion], (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

/* DELETE Question. */
router.delete('/:id', (req, res) => {
  const idQuestion = req.params.id;
  connection.query('DELETE FROM admin_faq WHERE id = ?', [idQuestion], (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

router.post('/', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO admin_faq SET ?', formData, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

export default router;
