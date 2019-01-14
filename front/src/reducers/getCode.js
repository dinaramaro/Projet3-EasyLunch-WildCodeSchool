const initialState = {
  loading: false,
  error: null,
  code: {},
};

const getCode = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CODE_FAILED':
      return {
        ...state,
        error: action.error,
      };
    case 'GET_CODE_SUCCESS':
      return {
        code: action.code,
        loading: false,
        error: null,
      };
    case 'GET_CODE_LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default getCode;
