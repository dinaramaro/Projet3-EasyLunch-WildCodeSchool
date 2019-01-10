import express from 'express';
import connection from '../config';

const router = express.Router();

router.post('/', (req, res) => {
  connection.query('SELECT name, id FROM public_code WHERE free = 1 ORDER BY RAND() LIMIT 1', (err, results) => {
    if (err) {
      res.status(500).send(`Erreur public code: ${err}`);
    } else {
      const code = results[0].id;
      const nameCode = results[0].name;
      connection.query('UPDATE public_code SET free = 0 WHERE name = ?', nameCode, (err2) => {
        if (err2) {
          res.status(500).send(`Erreur public code: ${err2}`);
        } else {
          const { tableBooking } = req.body;
          const newBooking = {
            ...tableBooking,
            code
          };
          connection.query('INSERT INTO public_booking SET ?', newBooking, (err3, results3) => {
            if (err3) {
              res.status(500).send(`Erreur public booking: ${err3}`);
            } else {
              // eslint-disable-next-line camelcase
              const booking_id = results3.insertId;
              const { tableCommand } = req.body;
              const newCommand = {
                ...tableCommand,
                booking_id
              };
              connection.query('INSERT INTO public_command SET ?', newCommand, (err4, results4) => {
                if (err4) {
                  res.status(500).send(`Erreur public command: ${err4}`);
                } else {
                  // eslint-disable-next-line camelcase
                  const command_id = results4.insertId;
                  const { tablePayment } = req.body;
                  const newPayment = {
                    ...tablePayment,
                    command_id
                  };
                  connection.query('INSERT INTO public_payment SET ?', newPayment, (err5) => {
                    if (err5) {
                      res.status(500).send(`Erreur public payment: ${err5}`);
                    } else {
                      res.sendStatus(201);
                    }
                  });
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
