const initialState = {
  loading: false,
  error: null,
  infos: [],
  topInfo: false,
};

const menuRestoInfos = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_RESTO_INFOS_FAILED':
      return {
        ...state,
        error: action.error,
      };
    case 'MENU_RESTO_INFOS_SUCCESS':
      return {
        infos: action.infos[0],
        loading: false,
        error: null,
        topInfo: true,
      };
    case 'MENU_RESTO_INFOS_LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default menuRestoInfos;
