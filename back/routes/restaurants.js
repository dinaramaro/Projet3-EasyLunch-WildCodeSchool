import express from 'express';
import connection from './config';

const router = express.Router();

router.get('/:id', (req, res) => {
  const id = req.params.id;
  let restos = {};
  connection.query('SELECT DISTINCT name, address, schedule, city, tva FROM public_restaurants WHERE id = ?', id, (err1, results) => {
    if (err1) {
      res.status(500).send('Erreur');
    } else {
      restos = {
        ...restos,
        restoInfos: results[0],
      };
      connection.query('SELECT menu.id, menu.name as menu_name, menu.price as menu_price, menu.mod, menu.nbmeals, mm.id_plat, meals.name as meals_name, meals.price as meals_price, meals.plat, meals.available, meals.alcool from public_menu menu left join public_menu_meals mm on menu.id = mm.id_menu right JOIN public_meals meals on mm.id_plat = meals.id where menu.id_restaurant = ? AND menu.hide = 0 AND meals.hide = 0 ORDER BY menu.id, meals.plat', id, (err2, resultsmenu) => {
        if (err2) {
          res.status(500).send('Erreur');
        } else {
          restos = {
            ...restos,
            menus: resultsmenu,
          };
          res.json(restos);
        }
      });
    }
  });
});

export default router;
