const initialState = {
  loading: false,
  error: null,
  menus: [],
};

const menuResto = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_RESTO_FAILED':
      return {
        ...state,
        error: action.error,
      };
    case 'MENU_RESTO_SUCCESS':
      return {
        menus: action.infos,
        loading: false,
        error: null,
      };
    case 'MENU_RESTO_LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default menuResto;
