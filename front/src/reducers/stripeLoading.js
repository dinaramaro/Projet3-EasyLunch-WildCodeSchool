const initialState = {
  loading: false,
  success: false,
  error: null,
};

const stripeLoading = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case 'STRIPE_PAYMENT_FAILED':
      newState = {
        ...state,
        error: action.error,
      };
      return newState;
    case 'STRIPE_PAYMENT_SUCCESS':
      newState = {
        loading: false,
        success: true,
        error: null,
      };
      return newState;
    case 'STRIPE_PAYMENT_LOADING':
      newState = {
        ...state,
        loading: true,
      };
      return newState;
    case 'INIT_STATE':
      return initialState;
    default:
      return state;
  }
};

export default stripeLoading;
