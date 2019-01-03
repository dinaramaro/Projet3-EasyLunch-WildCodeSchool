const cardRestoLoading = () => ({
  type: 'CARD_RESTO_LOADING',
});

const cardRestoFailed = error => ({
  type: 'CARD_RESTO_FAILED',
  error,
});

export const cardRestoSuccess = infos => ({
  type: 'CARD_RESTO_SUCCESS',
  infos,
});

export function cardResto(url) {
  return (dispatch) => {
    console.log('dispatch');
    dispatch(cardRestoLoading());
    fetch(url)
      .then((response) => {
        console.log('response', response);
        if (!response.ok) {
          console.log('response KO')
          throw Error(response.statusText);
        }
        console.log('response', response);
        return response;
      })
      .then(res => res.json())
      .then((infos) => {
        dispatch(cardRestoSuccess(infos));
      })
      .catch(error => dispatch(cardRestoFailed(error)));
  };
}
