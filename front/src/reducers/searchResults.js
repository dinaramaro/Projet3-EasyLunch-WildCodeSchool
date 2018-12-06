const initialState = {
  loading: false,
  error: null,
  results: [],
};

const searchResults = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_FAILED':
      return {
        ...state,
        error: action.error,
      };
    case 'SEARCH_SUCCESS':
      return {
        ...initialState,
        results: action.items,
      };
    case 'SEARCH_LOADING':
      return {
        ...initialState,
        loading: true,
      };
    default:
      return state;
  }
};

export default searchResults;
