import express from 'express';
import bcrypt from 'bcrypt';
import connection from '../config';

const router = express.Router();

router.post('/', (req, res) => {
  const user = req.body;
  const data = {
    ...user,
    password: bcrypt.hashSync(user.password, 10),
  };
  connection.query('INSERT INTO public_users_app SET ?', data, (err) => {
    if (err) {
      res.status(500);
    } else {
      res.sendStatus(200);
    }
  });
});


export default router;
