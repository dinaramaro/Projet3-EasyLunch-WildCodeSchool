import express from 'express';
import nodemailer from 'nodemailer';
import { mail, passwordMail } from '../myAccount/secretOrKey';


const router = express.Router();

router.post('/', (req, res) => {
  const output = `
    <p>Mail de la part de ${req.body.email}</p>
    <br />
    <p>${req.body.text}</p>
  `;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: mail,
      pass: passwordMail,
    },
  });
  const mailOptions = {
    from: `EasyLunch Contact ${mail}`,
    to: mail,
    subject: `EasyLunch : ${req.body.subject}`,
    html: output
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      res.sendStatus(500);
    }
    res.sendStatus(200);
  });
});

export default router;
