const searchLoading = () => ({
  type: 'SEARCH_LOADING',
});

const searchFailed = error => ({
  type: 'SEARCH_FAILED',
  error,
});

export const searchSuccess = items => ({
  type: 'SEARCH_SUCCESS',
  items,
});


export function dataResults(url) {
  return (dispatch) => {
    dispatch(searchLoading());
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(res => res.json())
      .then((items) => {
        dispatch(searchSuccess(items));
      })
      .catch(error => dispatch(searchFailed(error)));
  };
}
