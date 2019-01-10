import express from 'express';
import bcrypt from 'bcrypt';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import jwt from 'jsonwebtoken';
import connection from '../config';
import secret from './secretOrKey';

const router = express.Router();

passport.use('local', new LocalStrategy({
  usernameField: 'mail',
  passwordField: 'password',
  session: false,
}, (email, password, done) => {
  try {
    connection.query('select * from public_users_app where mail = ?', email, (err, results) => {
      if (err) {
        return done(err, false);
      }
      const user = results[0];
      if (!user) {
        return done(null, false);
      }
      const authPassword = bcrypt.compareSync(password, user.password);
      if (!authPassword) {
        return done(null, false);
      }
      return done(null, user);
    });
  } catch (e) {
    console.log('err', e);
  }
}));

passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret,
}, (jwtPayload, cb) => cb(null, jwtPayload)
));

router.post('/', (req, res) => {
  passport.authenticate('local', (err, data) => {
    if (err) {
      return res.status(500).send(`${err} dans le login`);
    }
    if (!data) {
      return res
        .status(401)
        .json({ message: "Erreur de Mot de Passe ou d'adresse mail" });
    }
    const { password, ...user } = data;
    const token = jwt.sign(user, secret, { expiresIn: 60 });
    connection.query('DELETE FROM public_token WHERE user = ?', user.mail, (error) => {
      if (error) {
        res.status(500).send(`${err}`);
      } else {
        res.status(200);
      }
    });
    connection.query('INSERT INTO public_token (token, user) VALUES (?, ?)', [token, user.mail], (error) => {
      if (error) {
        res.status(500).send(`${err} dans le login`);
      } else {
        res.status(200);
      }
    });
    return res.json({ user, token });
  })(req, res);
});

export default router;
