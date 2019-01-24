export const handleChangeOrder = (name, value, idresto, user) => ({
  type: 'CHANGE_ORDER',
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
  type: 'CHOOSE_ON_MENUS',
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
  type: 'CHOOSE_ON_CARDS',
  name,
  value,
  mealprice,
  text,
  idmeal,
  plat,
  user,
});

export const handleChangeSpecial = (name, value) => ({
  type: 'CHANGE_SPECIAL',
  name,
  value,
});

export const getUserId = iduser => ({
  type: 'GET_USER_ID',
  iduser,
});

export const recupGeInfo = (nb, schedule) => ({
  type: 'RECUP_GE_INFO',
  nb,
  schedule,
});

export const initState = () => ({
  type: 'INIT_STATE',
});
