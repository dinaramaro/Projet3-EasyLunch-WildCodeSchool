export const handleChangeOrder = (e, idresto) => ({
  type: 'CHANGEORDER',
  e,
  idresto,
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

export const handleChooseOnCards = (e, mealprice, text, idmeal, plat) => ({
  type: 'CHOOSEONCARDS',
  e,
  mealprice,
  text,
  idmeal,
  plat,
});

export const handleChangeSpecial = e => ({
  type: 'CHANGESPECIAL',
  e,
});
