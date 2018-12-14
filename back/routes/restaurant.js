import express from 'express';
import connection from './config';

const router = express.Router();

router.get('/menus/:id', (req, res) => {
  const id = req.params.id;
  let restos = {};
  connection.query('select distinct name, address, schedule, city, tva from public_restaurants where id = ?', id, (err, results) => {
    if (err) {
      res.status(500).send('Erreur');
    } else {
      restos = {
        ...restos,
        restoInfos: results[0],
      };
      connection.query('select menu.id, menu.name, menu.price, menu.mod, menu.nbmeals, mm.id_plat, meals.name, meals.price, meals.plat, meals.available, meals.alcool from public_menu menu left join public_menu_meals mm on menu.id = mm.id_menu right join public_meals meals on mm.id_plat = meals.id where menu.id_restaurant = ? and menu.hide = 0 and meals.hide = 0', id, (err, resultsmenu) => {
        if (err) {
          res.status(500).send('Erreur');
        } else {
          restos = {
            ...restos,
            menus: resultsmenu,
          };
          connection.query('select distinct res.name, res.address, res.schedule, res.city, res.tva, meals.name, meals.price, meals.plat, meals.available, meals.alcool from public_restaurants res inner join public_meals meals on meals.restaurant_id = res.id where meals.restaurant_id = ? and meals.hide = 0', id, (err, resultscarte) => {
            if (err) {
              res.status(500).send('Erreur');
            } else {
              restos = {
                ...restos,
                carte: resultscarte,
              };
              res.json(restos);
            }
          });
        }
      });
    }
  });
});

export default router;

