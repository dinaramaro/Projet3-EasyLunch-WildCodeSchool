export const handleChangeOrder = (name, value, idresto, user) => ({
  type: 'CHANGEORDER',
  name,
  value,
  idresto,
  user,
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
  user,
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
  user,
});

export const handleChooseOnCards = (name, value, mealprice, text, idmeal, plat, user) => ({
  type: 'CHOOSEONCARDS',
  name,
  value,
  mealprice,
  text,
  idmeal,
  plat,
  user,
});

export const handleChangeSpecial = (name, value) => ({
  type: 'CHANGESPECIAL',
  name,
  value,
});

export const getUserId = iduser => ({
  type: 'GETUSERID',
  iduser,
});
