import express from 'express';
import connection from '../config';

const router = express.Router();

router.get('/', (req, res) => {
  connection.query('SELECT * FROM admin_partners', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la recupération des partenaires');
    } else {
      res.json(results);
    }
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM admin_partners WHERE id = ?', id, (err) => {
    if (err) {
      res.status(500).send('Erreur lors de la suppression d\'un partenaire');
    } else {
      res.sendStatus(200);
    }
  });
});

router.post('/', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO admin_partners SET ?', formData, (err) => {
    if (err) {
      res.status(500).send("Erreur lors de la sauvegarde d'une personne");
    } else {
      res.sendStatus(200);
    }
  });
});

export default router;
