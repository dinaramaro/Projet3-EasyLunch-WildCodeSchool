import express from 'express';

import connection from './conf';

const router = express.Router();

/* GET index page. */
router.get('/faq', (req, res) => {
  connection.query('SELECT * FROM about_FAQ', (err, results) => {
    if (err) {
      res.status(500).send('Erreur');
    } else {
      res.json(results);
    }
  });
});

/* GET id Question. */
router.get('/faq/:id', (req, res) => {
  const questionId = req.params.id;
  connection.query(`SELECT * FROM about_FAQ WHERE id = ${questionId}`, (err, results) => {
    if (err) {
      res.status(500).send('Erreur');
    } else {
      res.json(results);
    }
  });
});

/* PUT MODIFIER Question. */
router.put('/faq/:id', (req, res) => {
  const idQuestion = req.params.id;
  const formData = req.body;
  connection.query('UPDATE about_FAQ SET? WHERE id = ?', [formData, idQuestion], (err) => {
    if (err) {
      res.status(500).send("Erreur lors de la modification d'une question");
    } else {
      res.sendStatus(200);
    }
  });
});

/* DELETE Question. */
router.delete('/faq/:id', (req, res) => {
  const idQuestion = req.params.id;
  connection.query('DELETE FROM about_FAQ WHERE id = ?', [idQuestion], (err) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la suppression d'un employé");
    } else {
      res.sendStatus(200);
    }
  });
});

export default router;
