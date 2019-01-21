const sendCommandParticipeLoading = () => ({
  type: 'SEND_COMMAND_PARTICIPATE_LOADING',
});

const sendCommandParticipeFailed = error => ({
  type: 'SEND_COMMAND_PARTICIPATE_FAILED',
  error,
});

export const sendCommandParticipeSuccess = () => ({
  type: 'SEND_COMMAND_PARTICIPATE_SUCCESS',
});

export function sendCommandParticipate(url, newOrder) {
  return (dispatch) => {
    dispatch(sendCommandParticipeLoading());
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(newOrder),
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
      .catch(error => dispatch(sendCommandParticipeFailed(error)));
  };
}
