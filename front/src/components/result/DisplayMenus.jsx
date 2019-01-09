import React from 'react';
import DisplayMenu from './DisplayMenu';

const DisplayMenus = ({ list }) => {
  let tempMenuName = '';
  let menus = [];

  for (let i = 0; i < list.length; i += 1) {
    if (tempMenuName !== list[i].menu_name) {
      const tempObj = {};
      tempObj.name = list[i].menu_name;
      tempObj.meals = [list[i]];
      tempMenuName = list[i].menu_name;
      menus = [...menus, tempObj];
    } else {
      const menu = menus[menus.length - 1].meals;
      const meals = [...menu, list[i]];
      menus[menus.length - 1].meals = meals;
    }
  }
  return (
    <div>
      {
        menus.map(menu => <div><DisplayMenu menu={menu} /></div>)
      }
    </div>
  );
};

export default DisplayMenus;
