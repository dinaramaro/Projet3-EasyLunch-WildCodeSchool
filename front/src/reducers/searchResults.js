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
        results: action.items,
        loading: false,
        error: null,
      };
    case 'SEARCH_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'INIT_STATE':
      return initialState;

    default:
      return state;
  }
};

export default searchResults;
