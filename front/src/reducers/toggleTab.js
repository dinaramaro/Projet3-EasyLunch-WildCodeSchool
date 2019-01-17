const initialState = {
  activeTab: '1',
};

const toggleTab = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case 'TOGGLE_TAB': {
      let tempTab = state.activeTab;
      if (tempTab === '1') {
        tempTab = '2';
      }
      newState = {
        ...state,
        activeTab: tempTab,
      };
      return newState;
    }
    case 'TOGGLE_TAB_DEF': {
      let tempTab = state.activeTab;
      if (tempTab === '1') {
        tempTab = '2';
      } else {
        tempTab = '1';
      }
      newState = {
        ...state,
        activeTab: tempTab,
      };
      return newState;
    }
    case 'INIT_STATE':
      return initialState;

    default: {
      return state;
    }
  }
};

export default toggleTab;
