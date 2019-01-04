export const handleChangeOrder = e => ({
  type: 'CHANGEORDER',
  e,
});

export const handleChoose = (e, price, text, id) => ({
  type: 'CHOOSE',
  e,
  price,
  text,
  id,
});
