import React from 'react';


const DisplayTitleMenu = ({ ent, main, dessert }) => {
  let title = '';
  let subtitle = '';
  if (ent.length > 0) {
    title = `${ent[0].menu_name} à ${ent[0].menu_price} €`;
    switch (ent[0].nbmeals) {
      case 2:
        subtitle = 'Entrée | Plat ou Plat | Dessert';
        break;
      case 3:
        subtitle = 'Entrée | Plat | Dessert';
        break;
      default:
        subtitle = '';
    }
  } else if (main.length > 0) {
    title = `${main[0].menu_name} à ${main[0].menu_price} €`;
    switch (main[0].nbmeals) {
      case 2:
        subtitle = 'Entrée | Plat ou Plat | Dessert';
        break;
      case 3:
        subtitle = 'Entrée | Plat | Dessert';
        break;
      default:
        subtitle = '';
    }
  } else if (dessert.length > 0) {
    title = `${dessert[0].menu_name} à ${dessert[0].menu_price} €`;
    switch (dessert[0].nbmeals) {
      case 2:
        subtitle = 'Entrée | Plat ou Plat | Dessert';
        break;
      case 3:
        subtitle = 'Entrée | Plat | Dessert';
        break;
      default:
        subtitle = '';
    }
  }
  return (
    <div>
      <p className="souligne">{ title }</p>
      <p>{ subtitle }</p>
    </div>
  );
};

export default DisplayTitleMenu;
