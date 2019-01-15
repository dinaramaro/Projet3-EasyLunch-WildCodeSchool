import express from 'express';
import connection from '../config';

const router = express.Router();

router.get('/:code', (req, res) => {
  const codeName = req.params.code;
  connection.query('SELECT restaurant_id FROM public_booking JOIN public_code ON public_booking.code = public_code.id WHERE name = ? AND free = 0 ORDER BY created_date DESC LIMIT 1', codeName, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results[0].restaurant_id);
    }
  });
});

export default router;
