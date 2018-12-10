const menuRestoInfosLoading = () => ({
  type: 'MENU_RESTO_INFOS_LOADING',
});

const menuRestoInfosFailed = error => ({
  type: 'MENU_RESTO_INFOS_FAILED',
  error,
});

export const menuRestoInfosSuccess = infos => ({
  type: 'MENU_RESTO_INFOS_SUCCESS',
  infos,
});

export const menuRestoInfos = (url) => {
  return (dispatch) => {
    dispatch(menuRestoInfosLoading());
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(res => res.json())
      .then((infos) => {
        dispatch(menuRestoInfosSuccess(infos));
      })
      .catch(error => dispatch(menuRestoInfosFailed(error)));
  };
};
