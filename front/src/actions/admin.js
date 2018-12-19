export const dataCGV = items => ({
  type: 'DATA_CGV',
  items,
});

export function fetchCGV(url) {
  return (dispatch) => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res;
      })
      .then(res => res.json())
      .then((items) => {
        dispatch(dataCGV(items));
      });
  };
}
