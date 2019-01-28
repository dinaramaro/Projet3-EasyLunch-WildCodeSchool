import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/', (req, res) => {
  const {
    masterName, shareCode, restoName, restoAddress, targetMail, hour
  } = req.body;

  const output = `
    <p>${masterName} vous invite à rejoindre sa table via le code <strong>${shareCode}</strong></p>
    <br />
    <p><a href="https://easylunch.campus-bordeaux.ovh/participation">Rejoindre la réservation</a></p>
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
      user: process.env.SENDER_MAIL,
      pass: process.env.PASSWORD_MAIL,
    },
  });
  const mailOptions = {
    from: `EasyLunch Contact ${process.env.SENDER_MAIL}`,
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
