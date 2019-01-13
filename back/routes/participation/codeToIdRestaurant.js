import express from 'express';
import connection from '../config';

const router = express.Router();

router.get('/', (req, res) => {
  const codeName = req.body;
  connection.query('SELECT restaurant_id FROM public_booking JOIN public_code ON public_booking.code = public_code.id WHERE ? ORDER BY created_date DESC LIMIT 1', codeName, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results[0].restaurant_id);
    }
  });
});

export default router;
