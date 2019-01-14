const sendCommandLoading = () => ({
  type: 'GET_CODE_LOADING',
});

const sendCommandFailed = error => ({
  type: 'GET_CODE_FAILED',
  error,
});

export const sendCommandSuccess = code => ({
  type: 'GET_CODE_SUCCESS',
  code,
});

export function sendCommand(url, form) {
  return (dispatch) => {
    dispatch(sendCommandLoading());
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(res => res.json())
      .then((code) => {
        dispatch(sendCommandSuccess(code));
      })
      .catch(error => dispatch(sendCommandFailed(error)));
  };
}
