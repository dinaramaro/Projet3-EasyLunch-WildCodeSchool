import express from 'express';
import nodemailer from 'nodemailer';
import connection from '../config';

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
              const { tableCommand, tableBooking: { restaurant_id } } = req.body;
              connection.query('SELECT cmd.id FROM public_command cmd JOIN public_booking book ON cmd.booking_id = book.id WHERE book.restaurant_id = ?', restaurant_id, (err4, results4) => {
                if (err4) {
                  res.sendStatus(500);
                } else {
                  const year = new Date().getFullYear();
                  const month = new Date().getMonth();
                  const id_custom = `${restaurant_id}-${year}-${month + 1}-${results4.length}`;
                  const bookingId = results3.insertId;
                  const newCommand = {
                    ...tableCommand,
                    booking_id: bookingId,
                    id_custom,
                  };
                  connection.query('INSERT INTO public_command SET ?', newCommand, (err5, results5) => {
                    if (err5) {
                      res.status(500).send(`Erreur public command: ${err5}`);
                    } else {
                      const commandId = results5.insertId;
                      const { tablePayment, idStripe } = req.body;
                      const newPayment = {
                        ...tablePayment,
                        command_id: commandId,
                        stripe_id: idStripe,
                      };
                      connection.query('INSERT INTO public_payment SET ?', newPayment, (err6, results6) => {
                        if (err6) {
                          res.status(500).send(`Erreur public payment: ${err6}`);
                        } else {
                          const paymentId = results6.insertId;
                          connection.query('UPDATE public_command SET payment_id = ? WHERE id = ?', [paymentId, commandId], (err7) => {
                            if (err7) {
                              res.sendStatus(500);
                            } else {
                              connection.query('SELECT name, mail FROM public_users_app JOIN public_booking ON public_users_app.id = public_booking.master_user_id WHERE public_booking.id = ?', bookingId, (err8, results8) => {
                                if (err8) {
                                  res.sendStatus(500);
                                } else {
                                  const { name, mail } = results8[0];
                                  const output = `
                                <h1>Merci ${name} d'avoir commandé chez EASYLUNCH</h1>
                                <br />
                                <p>Votre commande a bien été réservée, bon appétit!</p>
                                <p>Le code a partager a vos amis est ${code}
                                <br />
                                <p> Votre numéro de commande est le ${id_custom}.
                                <p> Je vous remercie de votre commande</p>
                              `;
                                  const transporter = nodemailer.createTransport({
                                    host: 'smtp.gmail.com',
                                    port: 465,
                                    secure: true,
                                    auth: {
                                      user: process.env.SENDER_MAIL,
                                      pass: process.env.PASSWORD_MAIL,
                                    },
                                  });
                                  const mailOptions = {
                                    from: `EasyLunch Commande ${process.env.SENDER_MAIL}`,
                                    to: mail,
                                    subject: 'Votre commande chez EASYLUNCH',
                                    html: output
                                  };
                                  transporter.sendMail(mailOptions, (err9) => {
                                    if (err9) {
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
    }
  });
});

export default router;
