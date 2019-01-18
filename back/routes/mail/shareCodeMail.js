import express from 'express';
import nodemailer from 'nodemailer';
import { senderMail, passwordMail } from '../myAccount/secretOrKey';

const router = express.Router();

router.post('/', (req, res) => {
  const {
    masterName, shareCode, restoName, restoAddress, targetMail, hour
  } = req.body;

  const output = `
    <p>${masterName} vous invite à rejoindre sa table via le code ${shareCode}</p>
    <br />
    <p>Informations restaurant :</p>
    <p>${restoName}</p>
    <p>${restoAddress}</p>
    <p>à ${hour}</p>
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
    from: `EasyLunch Contact ${senderMail}`,
    to: targetMail,
    subject: `Invitation à rejoindre de ${masterName}`,
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
