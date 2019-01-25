import React from 'react';
import DisplayMenu from './DisplayMenu';

const DisplayMenus = ({ list }) => {
  let tempMenuId = '';
  let menus = [];
  for (let i = 0; i < list.length; i += 1) {
    if (tempMenuId !== list[i].id) {
      const tempObj = {};
      tempObj.id = list[i].id;
      tempObj.menu_name = list[i].menu_name;
      tempObj.menu_price = list[i].menu_price;
      tempObj.meals = [list[i]];
      tempMenuId = list[i].id;
      menus = [...menus, tempObj];
    } else {
      const menu = menus[menus.length - 1].meals;
      const meals = [...menu, list[i]];
      menus[menus.length - 1].meals = meals;
    }
  }
  return (
    <div className="DisplayMenus">
      {
        menus.map(menu => <div key={menu.id}><DisplayMenu menu={menu} /></div>)
      }
    </div>
  );
};

export default DisplayMenus;
