import express from 'express';
import nodemailer from 'nodemailer';
import connection from '../config';
import { senderMail, passwordMail } from '../myAccount/secretOrKey';

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
                  connection.query('SELECT name, mail FROM public_users_app JOIN public_booking ON public_users_app.id = public_booking.master_user_id WHERE public_booking.id = ?', idBooking, (err7, results7) => {
                    if (err7) {
                      res.sendStatus(500);
                    } else {
                      const { name, mail } = results7[0];
                      const output = `
                    <h1>Merci ${name} d'avoir commandé chez EASYLUNCH</h1>
                    <br />
                    <p>Votre commande a bien été réservé, bonne appétit!</p>
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
});

export default router;
