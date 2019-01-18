import express from 'express';
import connection from '../config';

const router = express.Router();

router.get('/:code', (req, res) => {
  const codeName = req.params.code;
  connection.query('SELECT public_booking.id, nb_users FROM public_booking JOIN public_code ON public_booking.code = public_code.id WHERE name = ? AND free = 0 ORDER BY created_date DESC LIMIT 1 ', codeName, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      const { id, nb_users } = results[0];
      connection.query('SELECT booking_id FROM public_command WHERE booking_id = ?', id, (err2, results2) => {
        if (err2) {
          res.sendStatus(500);
        } else {
          const nbIdBookingInCommand = results2.length;
          if (nb_users > nbIdBookingInCommand) {
            connection.query('SELECT restaurant_id, nb_users, schedule FROM public_booking JOIN public_code ON public_booking.code = public_code.id WHERE name = ? AND free = 0 ORDER BY created_date DESC LIMIT 1', codeName, (err3, results3) => {
              if (err3) {
                res.sendStatus(500);
              } else {
                res.json(results3[0]);
              }
            });
          } else {
            res.sendStatus(401);
          }
        }
      });
    }
  });
});

export default router;
