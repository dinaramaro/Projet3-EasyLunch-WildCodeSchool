const initialState = {
  loading: false,
  error: null,
  resto: {},
};

const menuResto = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case 'MENU_RESTO_FAILED':
      newState = {
        ...state,
        error: action.error,
      };
      return newState;
    case 'MENU_RESTO_SUCCESS':
    console.log(action.MENU_RESTO_SUCCESS);
    
      newState = {
        resto: action.infos,
        loading: false,
        error: null,
      };
      return newState;
    case 'MENU_RESTO_LOADING':
      newState = {
        ...state,
        loading: true,
      };
      return newState;
    default:
      return state;
  }
};

export default menuResto;
