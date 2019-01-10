import express from 'express';
import connection from '../config';
import bcrypt from 'bcrypt';
import secret from './secretOrKey';

const router = express.Router();

router.put('/:id', (req, res) => {
  const id = req.params.id;

  connection.query('SELECT password FROM public_users_app WHERE id = ?', id, (err, results) => {
    if (err) {
      res.status(500).send(`Erreur: ${err}`);
    } else {
      const oldPassword = results[0].password;

      const { newPwd } = req.body;
      const compare = bcrypt.compareSync(oldPassword, newPwd);
      console.log(compare);
      
    }
  });

/*   const team = req.body;
  connection.query('UPDATE admin_team SET ? WHERE id = ?', [team, id], (err2) => {
    if (err2) {
      res.status(500).send('Erreur');
    } else {
      res.sendStatus(200);
    }
  }); */
});

export default router;
