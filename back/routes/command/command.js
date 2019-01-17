import express from 'express';
import nodemailer from 'nodemailer';
import connection from '../config';
import { senderMail, passwordMail } from '../myAccount/secretOrKey';

const router = express.Router();

router.post('/', (req, res) => {
  connection.query('SELECT name, id FROM public_code WHERE free = 1 ORDER BY RAND() LIMIT 1', (err, results) => {
    if (err) {
      res.sendStatus(500);
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
              const bookingId = results3.insertId;
              const { tableCommand } = req.body;
              const newCommand = {
                ...tableCommand,
                booking_id: bookingId,
              };
              connection.query('INSERT INTO public_command SET ?', newCommand, (err4, results4) => {
                if (err4) {
                  res.status(500).send(`Erreur public command: ${err4}`);
                } else {
                  const commandId = results4.insertId;
                  const { tablePayment, idStripe } = req.body;
                  const newPayment = {
                    ...tablePayment,
                    command_id: commandId,
                    stripe_id: idStripe,
                  };
                  connection.query('INSERT INTO public_payment SET ?', newPayment, (err5, results5) => {
                    if (err5) {
                      res.status(500).send(`Erreur public payment: ${err5}`);
                    } else {
                      const paymentId = results5.insertId;
                      connection.query('UPDATE public_command SET payment_id = ? WHERE id = ?', [paymentId, commandId], (err6) => {
                        if (err6) {
                          res.sendStatus(500);
                        } else {
                          connection.query('SELECT name, mail FROM public_users_app JOIN public_booking ON public_users_app.id = public_booking.master_user_id WHERE public_booking.id = ?', bookingId, (err7, results7) => {
                            if (err7) {
                              res.sendStatus(500);
                            } else {
                              const { name, mail } = results7[0];
                              const output = `
                            <h1>Merci ${name} d'avoir commandé chez EASYLUNCH</h1>
                            <br />
                            <p>Votre commande a bien été réservé, bonne appétit!</p>
                            <br />
                            <p> Je vous remercie de votre commande JOEL</p>
                          `;

                              const transporter = nodemailer.createTransport({
                                host: 'smtp.gmail.com',
                                port: 465,
                                secure: true,
                                auth: {
                                  user: senderMail,
                                  pass: passwordMail,
                                },
                              });
                              const mailOptions = {
                                from: `EasyLunch Commande ${senderMail}`,
                                to: mail,
                                subject: 'Votre commande chez EASYLUNCH',
                                html: output
                              };

                              transporter.sendMail(mailOptions, (error) => {
                                if (error) {
                                  res.sendStatus(500);
                                }
                                res.sendStatus(200);
                              });
                            }
                          });
                          res.json(nameCode);
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
    }
  });
});

export default router;
