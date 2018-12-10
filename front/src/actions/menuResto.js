const menuRestoLoading = () => ({
  type: 'MENU_RESTO_LOADING',
});

const menuRestoFailed = error => ({
  type: 'MENU_RESTO_FAILED',
  error,
});

export const menuRestoSuccess = infos => ({
  type: 'MENU_RESTO_SUCCESS',
  infos,
});

export const menuResto = (url) => {
  return (dispatch) => {
    dispatch(menuRestoLoading());
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(res => res.json())
      .then((infos) => {
        dispatch(menuRestoSuccess(infos));
      })
      .catch(error => dispatch(menuRestoFailed(error)));
  };
};
