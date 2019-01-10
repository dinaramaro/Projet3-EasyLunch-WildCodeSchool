import express from 'express';
import connection from '../config';
import bcrypt from 'bcrypt';
import secret from './secretOrKey';

const router = express.Router();

router.put('/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT password FROM public_users_app WHERE id = ?', id, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      const passwordDb = results[0].password;
      const { oldPwd } = req.body;
      const compare = bcrypt.compareSync(oldPwd, passwordDb);
      if (compare) {
        const { newPwd } = req.body;
        const cryptedNewPwd = {
          password: bcrypt.hashSync(newPwd, 10),
        };
        connection.query('UPDATE public_users_app SET ? WHERE id = ?', [cryptedNewPwd, id], (err2) => {
          if (err2) {
            res.sendStatus(500);
          } else {
            res.sendStatus(200);
          }
        });
      } else {
        res.sendStatus(403);
      }
    }
  });
});

export default router;
