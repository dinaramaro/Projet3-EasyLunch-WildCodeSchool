import express from 'express';
import connection from './config';

const router = express.Router();

router.get('/menus/:id', (req, res) => {
  const id = req.params.id;
  const restos = {};
  connection.query('select distinct id, name, address, schedule, city, tva, picture from public_restaurants where id = ?', id, (err1, results) => {
    if (err1) {
      res.status(500).send('Erreur');
    } else {
      restos.restoInfos = results[0];
      connection.query('select menu.id, menu.name as menu_name, menu.price as menu_price, menu.mod, menu.nbmeals, mm.id_plat, meals.name as meals_name, meals.price as meals_price, meals.plat, meals.available, meals.alcool from public_menu menu left join public_menu_meals mm on menu.id = mm.id_menu right join public_meals meals on mm.id_plat = meals.id where menu.id_restaurant = ? and menu.hide = 0 and meals.hide = 0  order by menu.id, meals.plat', id, (err2, resultsmenu) => {
        if (err2) {
          res.status(500).send('Erreur');
        } else {
          restos.menus = resultsmenu;
          connection.query('select distinct meals.id, meals.name, meals.price, meals.plat, meals.available, meals.alcool from public_restaurants res inner join public_meals meals on meals.restaurant_id = res.id where meals.restaurant_id = ? and meals.hide = 0 order by meals.plat', id, (err3, resultscards) => {
            if (err3) {
              res.status(500).send('Erreur');
            } else {
              restos.cards = resultscards;
              res.json(restos);
            }
          });
        }
      });
    }
  });
});

export default router;

