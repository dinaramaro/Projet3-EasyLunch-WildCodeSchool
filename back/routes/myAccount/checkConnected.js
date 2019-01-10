import express from 'express';
import connection from '../config';

const router = express.Router();

router.get('/:token', (req, res) => {
  const token = req.params.token;
  connection.query('SELECT public_users_app.mail, public_users_app.createdAt, public_users_app.phone, public_users_app.name FROM public_users_app JOIN public_token ON public_token.user = public_users_app.mail WHERE token = ?', token, (err, results) => {
    if (err) {
      res.status(500).send('Erreur');
    } else {
      res.json(results[0]);
    }
  });
});

export default router;
