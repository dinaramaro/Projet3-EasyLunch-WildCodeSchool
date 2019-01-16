import express from 'express';
import connection from '../config';

const router = express.Router();

router.post('/:code', (req, res) => {
  const code = req.params.code;
  connection.query('SELECT a.id from public_booking a INNER join public_code b on b.id = a.code where b.name = ? ORDER BY created_date DESC LIMIT 1', code, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      const idBooking = results[0].id;
      const { tableCommand } = req.body;
      const newCommand = {
        ...tableCommand,
        booking_id: idBooking,
      };
      connection.query('INSERT INTO public_command SET ?', newCommand, (err2, results2) => {
        if (err2) {
          res.sendStatus(500);
        } else {
          const commandId = results2.insertId;
          const { tablePayment, idStripe } = req.body;
          const newPayment = {
            ...tablePayment,
            command_id: commandId,
            stripe_id: idStripe,
          };
          connection.query('INSERT INTO public_payment SET ?', newPayment, (err3, results3) => {
            if (err3) {
              res.sendStatus(500);
            } else {
              const paymentId = results3.insertId;
              connection.query('UPDATE public_command SET payment_id = ? WHERE id = ?', [paymentId, commandId], (err4) => {
                if (err4) {
                  res.sendStatus(500);
                } else {
                  res.sendStatus(200);
                }
              });
            }
          });
        }
      });
    }
  });
});

export default router;
