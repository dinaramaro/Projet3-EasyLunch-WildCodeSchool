const initialState = {
  questions: [],
};

const fetchFAQ = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case 'FETCH_FAQ_BEGIN':
      newState = {
        ...state,
        loading: true,
        error: null,
      };
      return newState;
    case 'FETCH_FAQ_SUCCESS':
      newState = {
        ...state,
        loading: false,
        questions: action.items,
      };
      return newState;
    case 'FETCH_FAQ_ERROR':
      newState = {
        ...state,
        loading: false,
        error: action.error,
        questions: [],
      };
      return newState;
    default:
      return state;
  }
};

export default fetchFAQ;
