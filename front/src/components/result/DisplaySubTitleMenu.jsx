import React from 'react';


const DisplaySubTitleMenu = ({ list }) => {
  let subtitle = '';
  if (list.length > 0) {
    switch (list[0].nbmeals) {
      case 1:
        subtitle = `Plat ${list[0].menu_price} €`;
        break;
      case 2:
        subtitle = `Entrée | Plat ou Plat | Dessert ${list[0].menu_price} €`;
        break;
      case 3:
        subtitle = `Entrée | Plat | Dessert ${list[0].menu_price} €`;
        break;
      default:
        subtitle = '';
    }
  }  
  return (
    <div>
      { subtitle }
    </div>
  );
};

export default DisplaySubTitleMenu;