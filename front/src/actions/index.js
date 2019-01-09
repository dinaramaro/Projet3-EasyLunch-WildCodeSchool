export const handleChangeOrder = e => ({
  type: 'CHANGEORDER',
  e,
});

export const handleChooseOnMenus = (
  e,
  idmenu,
  menuname,
  menuprice,
  text,
  idmeal,
  mealprice,
  plat,
  nbmeals,
) => ({
  type: 'CHOOSEONMENUS',
  e,
  idmenu,
  menuname,
  menuprice,
  text,
  idmeal,
  mealprice,
  plat,
  nbmeals,
});

export const handleChooseOnCards = (e, price, text, id, plat) => ({
  type: 'CHOOSEONCARDS',
  e,
  price,
  text,
  id,
  plat,
});
