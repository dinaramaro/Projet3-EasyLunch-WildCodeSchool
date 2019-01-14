export const handleChangeOrder = (name, value, idresto) => ({
  type: 'CHANGEORDER',
  name,
  value,
  idresto,
});

export const handleChooseOnMenus = (
  name,
  value,
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
  name,
  value,
  idmenu,
  menuname,
  menuprice,
  text,
  idmeal,
  mealprice,
  plat,
  nbmeals,
});

export const handleChooseOnCards = (name, value, mealprice, text, idmeal, plat) => ({
  type: 'CHOOSEONCARDS',
  name,
  value,
  mealprice,
  text,
  idmeal,
  plat,
});

export const handleChangeSpecial = (name, value) => ({
  type: 'CHANGESPECIAL',
  name,
  value,
});
