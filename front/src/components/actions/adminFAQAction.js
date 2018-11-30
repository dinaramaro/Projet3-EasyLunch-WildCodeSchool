export const fetchFAQBegin = () => ({
  type: 'FETCH_FAQ_BEGIN',
});

export const fetchFAQSuccess = items => ({
  type: 'FETCH_FAQ_SUCCESS',
  items,
});

export const fetchFAQError = error => ({
  type: 'FETCH_FAQ_ERROR',
  error,
});

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

// export function getProductsHome() {
//   return function dispatch() {
//     dispatch(fetchFAQBegin());
//     return fetch('http://localhost:4000/api/about/faq')
//       .then(handleErrors)
//       .then(res => res.json())
//       .then(produits => dispatch(fetchFAQSuccess(produits)))
//       .catch(error => dispatch(fetchFAQError(error)));
//   };
// }

export function fetchFAQ() {
  return (dispatch) => {
    dispatch(fetchFAQBegin());
    return fetch('http://localhost:3000/admin/produits')
      .then(handleErrors)
      .then(res => res.json())
      .then(produits => dispatch(fetchFAQSuccess(produits)))
      .catch(error => dispatch(fetchFAQError(error)));
  };
}
