import express from 'express';
import connection from '../config';

const router = express.Router();

router.get('/:userId', (req, res) => {
  const userId = req.params.userId;

  connection.query('SELECT cmd.created_date, rest.name, rest.address, rest.picture, book.schedule, book.nb_users, cmd.price FROM public_command cmd RIGHT JOIN public_booking book ON cmd.booking_id = book.id RIGHT JOIN public_restaurants rest ON book.restaurant_id = rest.id WHERE cmd.user_id = ?', userId, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});
export default router;
