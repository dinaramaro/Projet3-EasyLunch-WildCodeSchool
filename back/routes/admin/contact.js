import express from 'express';
import connection from '../config';

const router = express.Router();

router.get('/', (req, res) => {
  connection.query('SELECT * from admin_contact_client_text', (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      const result = results[0];
      res.json(result.text);
    }
  });
});

router.put('/', (req, res) => {
  const { contactText } = req.body;
  connection.query('UPDATE admin_contact_client_text SET text = ? WHERE id = 1', contactText, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

export default router;
