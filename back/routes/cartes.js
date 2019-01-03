import express from 'express';
import connection from './config';

const router = express.Router();

router.get('/:id', (req, res) => {
  console.log('tiit');
  const id = req.params.id;
  const restos = {};
  connection.query('select menu.id, menu.name as menu_name, menu.price as menu_price, menu.mod, menu.nbmeals, mm.id_plat, meals.name as meals_name, meals.price as meals_price, meals.plat, meals.available, meals.alcool from public_menu menu left join public_menu_meals mm on menu.id = mm.id_menu right join public_meals meals on mm.id_plat = meals.id where menu.id_restaurant = ? and menu.hide = 0 and meals.hide = 0  order by menu.id, meals.plat', id, (err1, resultsmenus) => {
    if (err1) {
      res.status(500).send('Erreur');
    } else {
      restos.menus = resultsmenus;
      connection.query('select distinct meals.name, meals.price, meals.plat, meals.available, meals.alcool from public_restaurants res inner join public_meals meals on meals.restaurant_id = res.id where meals.restaurant_id = ? and meals.hide = 0 order by meals.plat', id, (err2, resultscartes) => {
        if (err2) {
          res.status(500).send('Erreur');
        } else {
          restos.cartes = resultscartes;
          res.json(restos);
        }
      });
    }
  });
});

export default router;

