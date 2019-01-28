import express from 'express';
import nodemailer from 'nodemailer';
import connection from '../config';
import { senderMail, passwordMail } from '../myAccount/secretOrkey';

const router = express.Router();

router.post('/:code', (req, res) => {  
  const code = req.params.code;
  connection.query('SELECT a.id, a.restaurant_id FROM public_booking a INNER join public_code b on b.id = a.code where b.name = ? ORDER BY created_date DESC LIMIT 1', code, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      const idBooking = results[0].id;
      const restaurant_id = results[0].restaurant_id;
      const { tableCommand } = req.body;
      connection.query('SELECT cmd.id FROM public_command cmd JOIN public_booking book ON cmd.booking_id = book.id WHERE book.restaurant_id = ?', restaurant_id, (err2, results2) => {
        if (err2) {
          res.sendStatus(500);
        } else {
          const year = new Date().getFullYear();
          const month = new Date().getMonth();
          const id_custom = `${restaurant_id}-${year}-${month + 1}-${results2.length}`;
          const newCommand = {
            ...tableCommand,
            booking_id: idBooking,
            id_custom,
          };
          connection.query('INSERT INTO public_command SET ?', newCommand, (err3, results3) => {
            if (err3) {
              res.sendStatus(500);
            } else {
              const commandId = results3.insertId;
              const { tablePayment, idStripe } = req.body;
              const newPayment = {
                ...tablePayment,
                command_id: commandId,
                stripe_id: idStripe,
              };
              connection.query('INSERT INTO public_payment SET ?', newPayment, (err4, results4) => {
                if (err4) {
                  res.sendStatus(500);
                } else {
                  const paymentId = results4.insertId;
                  connection.query('UPDATE public_command SET payment_id = ? WHERE id = ?', [paymentId, commandId], (err5) => {
                    if (err5) {
                      res.sendStatus(500);
                    } else {
                      const { tablePayment: { user_id } } = req.body;
                      connection.query('SELECT name, mail FROM public_users_app WHERE id = ?', user_id, (err7, results7) => {
                        if (err7) {
                          res.sendStatus(500);
                        } else {
                          const { name, mail } = results7[0];
                          const output = `
                        <h1>Merci ${name} d'avoir commandé chez EASYLUNCH</h1>
                        <br />
                        <p>Votre commande a bien été réservé, bon appétit!</p>
                        <br />
                        <p> Je vous remercie de votre commande</p>
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
