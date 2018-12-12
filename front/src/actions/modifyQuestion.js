export const modifyQuestionBegin = () => ({
  type: 'MODIFIER_QUESTION_BEGIN',
});

export const modifyQuestionSuccess = items => ({
  type: 'MODIFIER_QUESTION_SUCCESS',
  items,
});

export const modifyQuestionError = error => ({
  type: 'MODIFIER_QUESTION_ERROR',
  error,
});

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function modifyQuestion(idFetch) {
  return (dispatch) => {
    dispatch(modifyQuestionBegin());
    return 
    const config = {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
  }
    fetch(`http://localhost:4000/api/about/faq/${idFetch}`, config);
      .then(handleErrors)
      .then(res => res.json())
      .then(question => dispatch(modifyQuestionSuccess(question)))
      .catch(error => dispatch(modifyQuestionError(error)));
  };
}