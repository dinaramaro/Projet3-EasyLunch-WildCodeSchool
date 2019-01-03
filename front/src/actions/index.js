export const handleChangeOrder = e => ({
  type: 'CHANGEORDER',
  e,
});

export const handleChoose = (e, price) => ({
  type: 'CHOOSE',
  e,
  price,
});
