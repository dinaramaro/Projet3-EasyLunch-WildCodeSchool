import express from 'express';
import connection from '../config';

const router = express.Router();


router.post('/', (req, res) => {
  const newBooking = req.body;
  connection.query('INSERT INTO public_booking SET ?', newBooking, (err, results) => {
    if (err) {
      res.status(500).send('Erreur');
    } else {
      const idBooking = results.insertId;
      res.status(201);

      connection.query('INSERT INTO public_command')
    }
  });
});

export default router;
