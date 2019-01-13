import express from 'express';

import connection from '../config';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
  connection.query('SELECT * FROM admin_faq', (err, results) => {
    if (err) {
      res.status(500).send('Erreur');
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
      res.status(500).send('Erreur');
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
      res.status(500).send("Erreur lors de la modification d'une question");
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
      res.status(500).send("Erreur lors de la suppression d'une question");
    } else {
      res.sendStatus(200);
    }
  });
});

router.post('/', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO admin_faq SET ?', formData, (err) => {
    if (err) {
      res.status(500).send("Erreur lors de la sauvegarde d'une question");
    } else {
      res.sendStatus(200);
    }
  });
});

export default router;
