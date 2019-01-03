const initialState = {
  loading: false,
  error: null,
  cartes: [],
};

const cardResto = (state = initialState, action) => {
  switch (action.type) {
    case 'CARD_RESTO_FAILED':
      return {
        ...state,
        error: action.error,
      };
    case 'CARD_RESTO_SUCCESS':
      return {
        cartes: action.infos,
        loading: false,
        error: null,
      };
    case 'CARD_RESTO_LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default cardResto;
