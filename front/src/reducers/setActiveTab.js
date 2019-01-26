const initialState = {
  activeTab: '0',
};

const setActiveTab = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_TAB':
      return {
        activeTab: action.tab,
      };
    case 'INIT_STATE':
      return initialState;
    default:
      return state;
  }
};

export default setActiveTab;
